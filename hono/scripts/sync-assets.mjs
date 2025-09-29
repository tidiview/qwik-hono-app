// /hono/scripts/sync-assets.mjs  (100% ESM, compatible Windows/Mac/Linux)
import * as fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const honoDir = path.resolve(__dirname, "..");
const repoRoot = path.resolve(honoDir, "..");
const frontendDir = path.join(repoRoot, "frontend");
const srcDir = path.join(frontendDir, "dist");

// change si besoin : dossier statique servi par le worker
const destDir = path.join(honoDir, "public");

async function exists(p) {
  try {
    await fsp.stat(p);
    return true;
  } catch {
    return false;
  }
}

async function rmrf(p) {
  try {
    await fsp.rm(p, { recursive: true, force: true });
  } catch {}
}

async function ensureDir(p) {
  await fsp.mkdir(p, { recursive: true });
}

// on exclut le manifest client (copié via sync-ssr.mjs)
function filter(src) {
  return path.basename(src) !== "q-manifest.json";
}

// copie récursive (Node 16.7+ ; OK sur ton Node 24)
async function cpRecursive(src, dest) {
  await fsp.mkdir(path.dirname(dest), { recursive: true });
  return new Promise((resolve, reject) => {
    fs.cp(src, dest, { recursive: true, force: true, filter }, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

async function main() {
  if (!(await exists(srcDir))) {
    console.error(`❌ Source introuvable: ${path.relative(repoRoot, srcDir)}`);
    process.exit(1);
  }

  await rmrf(destDir);
  await ensureDir(destDir);

  await cpRecursive(srcDir, destDir);

  console.log("✅ Assets copiés");
  console.log("   from:", path.relative(repoRoot, srcDir));
  console.log("   to  :", path.relative(repoRoot, destDir));
}

main().catch((e) => {
  console.error("❌ sync-assets.mjs a échoué:", e?.message ?? e);
  process.exit(1);
});
