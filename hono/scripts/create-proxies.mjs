// scripts/create-proxies.mjs
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const honoDir = path.resolve(__dirname, "..");

const aliasesDir = path.join(honoDir, ".qwik-server", "aliases");
const nmDir = path.join(honoDir, "node_modules");

const proxies = [
  {
    pkg: "@qwik-client-manifest",
    file: "qwik-client-manifest.js",
    hasDefault: true,   // seul lui a un export default (q-manifest.json)
  },
  {
    pkg: "@qwik-city-static-paths",
    file: "qwik-city-static-paths.js",
    hasDefault: false,
  },
  {
    pkg: "@qwik-city-not-found-paths",
    file: "qwik-city-not-found-paths.js",
    hasDefault: false,
  },
];

async function main() {
  for (const { pkg, file, hasDefault } of proxies) {
    const pkgDir = path.join(nmDir, pkg);
    await fs.mkdir(pkgDir, { recursive: true });

    const target = path.join(pkgDir, "index.js");
    const rel = path.relative(pkgDir, path.join(aliasesDir, file)).replace(/\\/g, "/");

    let code = `// Proxy package for ${pkg}\nexport * from "${rel}";\n`;
    if (hasDefault) {
      code += `export { default } from "${rel}";\n`;
    }

    await fs.writeFile(target, code, "utf8");
    console.log(`✅ Proxy créé: ${pkg} -> ${rel} (default=${hasDefault})`);
  }
}

main().catch((e) => {
  console.error("❌ create-proxies.mjs failed:", e);
  process.exit(1);
});
