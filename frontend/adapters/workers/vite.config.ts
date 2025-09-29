// /frontend/adapters/workers/vite.config.ts
import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../../');

export default defineConfig({
  // on fige le root sur /frontend pour éviter tout dérapage de chemins
  root: ROOT,
  plugins: [
    // ordre recommandé : qwikCity d'abord, puis qwikVite
    qwikCity(),
    qwikVite(),
    tsconfigPaths({ projects: [resolve(ROOT, 'tsconfig.json')] }),
  ],
  build: {
    ssr: true,
    outDir: resolve(ROOT, '.qwik/server'),
    emptyOutDir: true,
    rollupOptions: {
        // 👇 tableau de chemins, pas un objet
        input: [
        resolve(ROOT, 'src/entry.ssr.tsx'),
        '@qwik-city-plan',
        ],
    },
},
});
