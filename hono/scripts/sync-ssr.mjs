// /hono/scripts/sync-ssr.mjs  — ESM, copie TOUT .qwik/server
import * as fssync from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const honoDir = path.resolve(__dirname, "..");
const repoRoot = path.resolve(honoDir, "..");

const serverCandidates = [
  path.resolve(honoDir, "../frontend/.qwik/server"),
  path.resolve(honoDir, "../frontend/server"),
  path.resolve(honoDir, ".qwik/server"),
];

const distCandidates = [
  path.resolve(honoDir, "../frontend/dist"),
  path.resolve(honoDir, "dist"),
];

const destDir = path.resolve(honoDir, ".qwik-server");

async function exists(p) {
  try { await fs.stat(p); return true; } catch { return false; }
}

async function pickDir(candidates) {
  for (const d of candidates) if (await exists(d)) return d;
  return null;
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function rmrf(p) {
  try { await fs.rm(p, { recursive: true, force: true }); } catch {}
}

// Recopie récursive (Node >=16.7 : fs.cp dispo)
async function cpRecursive(src, dest, filter) {
  await ensureDir(path.dirname(dest));
  return new Promise((resolve, reject) => {
    fssync.cp(src, dest, { recursive: true, force: true, filter }, (err) => {
      if (err) reject(err); else resolve();
    });
  });
}

async function main() {
  console.log("🔎 Recherche des artefacts SSR…");
  const serverDir = await pickDir(serverCandidates);
  if (!serverDir) {
    console.error("❌ Aucun dossier source 'server' trouvé :", serverCandidates.map(p => path.relative(repoRoot, p)).join(", "));
    process.exit(1);
  }
  const distDir = await pickDir(distCandidates);
  if (!distDir) {
    console.error("❌ Aucun dossier source 'dist' trouvé");
    process.exit(1);
  }

  console.log("📁 server :", path.relative(repoRoot, serverDir));
  console.log("📁 dist   :", path.relative(repoRoot, distDir));

  // On repart propre
  await rmrf(destDir);
  await ensureDir(destDir);

  // 1) Copier TOUT le contenu de .qwik/server (incl. q-*.js, maps, etc.)
  await cpRecursive(serverDir, destDir);

  // 2) Copier q-manifest.json à la racine de .qwik-server
  const qManifestSrc = path.join(distDir, "q-manifest.json");
  if (!(await exists(qManifestSrc))) {
    console.error("❌ q-manifest.json introuvable dans", path.relative(repoRoot, distDir));
    process.exit(1);
  }
  await fs.copyFile(qManifestSrc, path.join(destDir, "q-manifest.json"));
  console.log("✅ Copié q-manifest.json");

  // 3) Aliases (proxies simples)
  const aliasDir = path.join(destDir, "aliases");
  await ensureDir(aliasDir);

  await fs.writeFile(
    path.join(aliasDir, "qwik-client-manifest.js"),
    `// Alias pour @qwik-client-manifest
import manifest from '../q-manifest.json';
export default manifest;
export { manifest };
`
  );
  await fs.writeFile(
    path.join(aliasDir, "qwik-city-static-paths.js"),
    `export function isStaticPath(){return false}\n`
  );
  await fs.writeFile(
    path.join(aliasDir, "qwik-city-not-found-paths.js"),
    `export function getNotFound(){return null}\n`
  );

  console.log("✨ Sync SSR terminé →", path.relative(repoRoot, destDir));
}

main().catch(e => {
  console.error("❌ sync-ssr.mjs a échoué:", e?.stack ?? e);
  process.exit(1);
});
