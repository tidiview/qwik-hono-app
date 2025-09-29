// check-build.mjs
import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

const repoRoot = process.cwd();
const frontendDir = path.join(repoRoot, "frontend");

// Fichiers/dossiers sources à surveiller
const sourceDirs = [
  path.join(frontendDir, "src"),
  path.join(frontendDir, "routes"),
];

// Artefacts attendus
const buildFiles = [
  path.join(frontendDir, "dist", "q-manifest.json"),
  path.join(frontendDir, ".qwik", "server", "entry.ssr.js"),
];

async function exists(p) {
  try {
    await fs.stat(p);
    return true;
  } catch {
    return false;
  }
}

async function mtime(p) {
  try {
    const s = await fs.stat(p);
    return s.mtimeMs;
  } catch {
    return 0;
  }
}

async function latestMtime(dir) {
  let max = 0;
  async function walk(d) {
    const entries = await fs.readdir(d, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) {
        await walk(full);
      } else {
        const t = await mtime(full);
        if (t > max) max = t;
      }
    }
  }
  if (await exists(dir)) await walk(dir);
  return max;
}

async function main() {
  // Vérifie si artefacts existent
  const missing = [];
  for (const f of buildFiles) {
    if (!(await exists(f))) {
      missing.push(path.relative(repoRoot, f));
    }
  }

  // Compare dates modif
  const srcTimes = await Promise.all(sourceDirs.map(latestMtime));
  const latestSrc = Math.max(...srcTimes);

  const artTimes = await Promise.all(buildFiles.map(mtime));
  const latestBuild = Math.min(...artTimes); // on prend le plus ancien artefact

  const needsBuild = missing.length > 0 || latestSrc > latestBuild;

  if (needsBuild) {
    console.log("⚠️  Rebuild nécessaire !");
    if (missing.length > 0) {
      console.log("   Artefacts manquants :", missing.join(", "));
    } else {
      console.log("   Sources plus récentes que les artefacts.");
    }
    const child = spawn("npm", ["run", "build:all"], {
      cwd: repoRoot,
      stdio: "inherit",
      shell: true,
    });
    child.on("exit", (code) => process.exit(code));
  } else {
    console.log("✅ Artefacts à jour, pas de rebuild nécessaire.");
  }
}

main().catch((e) => {
  console.error("❌ check-build a échoué:", e);
  process.exit(1);
});
