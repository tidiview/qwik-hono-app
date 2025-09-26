// scripts/sync-ssr.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Racine du projet hono
const honoDir = path.resolve(__dirname, '..');

// Candidats d’emplacement pour les artefacts SSR
const serverCandidates = [
  path.resolve(honoDir, '../frontend/.qwik/server'),
  path.resolve(honoDir, '../frontend/server'),
  path.resolve(honoDir, '.qwik/server')
];

// Dossier attendu pour la copie
const destDir = path.resolve(honoDir, '.qwik-server');

// Liste des fichiers à synchroniser
const files = [
  { name: 'entry.ssr.js', variants: ['entry.ssr.js'], from: 'server' },
  { name: '@qwik-city-plan.js', variants: ['@qwik-city-plan.js', '@qwik-city-plan.mjs'], from: 'server' },
  { name: 'q-manifest.json', variants: ['q-manifest.json'], from: 'dist' }
];

async function exists(p) {
  try {
    await fs.stat(p);
    return true;
  } catch {
    return false;
  }
}

async function pickSourceDir(type) {
  if (type === 'server') {
    for (const dir of serverCandidates) {
      if (await exists(dir)) return dir;
    }
  }
  if (type === 'dist') {
    const dir = path.resolve(honoDir, '../frontend/dist');
    if (await exists(dir)) return dir;
  }
  return null;
}

async function main() {
  await fs.mkdir(destDir, { recursive: true });

  for (const f of files) {
    const srcDir = await pickSourceDir(f.from);
    if (!srcDir) {
      console.error(`❌ Aucun dossier source trouvé pour ${f.name}`);
      process.exit(1);
    }

    let found = null;
    for (const v of f.variants) {
      const p = path.join(srcDir, v);
      if (await exists(p)) {
        found = p;
        break;
      }
    }

    if (!found) {
      console.error(`❌ Fichier manquant dans ${srcDir} : ${f.variants.join(' ou ')}`);
      process.exit(1);
    }

    const target = path.join(destDir, f.name);
    await fs.copyFile(found, target);
    console.log(`✅ Copié ${path.relative(honoDir, found)} → ${path.relative(honoDir, target)}`);
  }

  // Création des alias
  const aliasDir = path.join(destDir, 'aliases');
  await fs.mkdir(aliasDir, { recursive: true });

  // @qwik-client-manifest
  await fs.writeFile(
    path.join(aliasDir, 'qwik-client-manifest.js'),
    `// Alias pour @qwik-client-manifest
import manifest from '../q-manifest.json';
export default manifest;
export { manifest };
`
  );

  // @qwik-city-static-paths
  await fs.writeFile(
    path.join(aliasDir, 'qwik-city-static-paths.js'),
    `// Alias pour @qwik-city-static-paths
export function isStaticPath() { return false; }
`
  );

  // @qwik-city-not-found-paths
  await fs.writeFile(
    path.join(aliasDir, 'qwik-city-not-found-paths.js'),
    `// Alias pour @qwik-city-not-found-paths
export function getNotFound() { return null; }
`
  );

  console.log('✨ Sync SSR terminé. Destination :', path.relative(honoDir, destDir));
  console.log('✨ Alias générés : qwik-client-manifest, qwik-city-static-paths, qwik-city-not-found-paths');
}

main().catch((e) => {
  console.error('❌ sync-ssr.mjs a échoué :', e?.message ?? e);
  process.exit(1);
});
