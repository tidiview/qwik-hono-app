// /hono/scripts/clean-all.mjs (ESM)
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dossiers
const honoDir = path.resolve(__dirname, "..");
const repoRoot = path.resolve(honoDir, "..");
const frontendDir = path.join(repoRoot, "frontend");

// util
async function rmrf(p) {
  try {
    await fs.rm(p, { recursive: true, force: true });
    console.log("🧹 removed", path.relative(repoRoot, p));
  } catch (e) {
    console.warn("⚠️  skip", path.relative(repoRoot, p), "-", e?.message ?? e);
  }
}

// ce qu'on nettoie
await Promise.all([
  rmrf(path.join(honoDir, ".qwik-server")),
  rmrf(path.join(frontendDir, ".qwik")),
  rmrf(path.join(frontendDir, "dist")),
  rmrf(path.join(frontendDir, ".vite")), // si présent
]);

console.log("✅ clean-all done");
