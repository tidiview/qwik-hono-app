import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// ⚓ root du projet FRONTEND, indépendamment du cwd
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;

export default defineConfig(({ command, mode }): UserConfig => {
  return {
    root: ROOT,
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths({ 
        projects: [resolve(ROOT, "tsconfig.json" )]
      }),
    ],
    optimizeDeps: {
      exclude: [],
    },
    server: {
      headers: {
        "Cache-Control": "public, max-age=0",
      },
      watch: {
        ignored: ["**/dist/**", "**/server/**", "**/hono/**"], // 👈 éviter les rebuilds en boucle
      },
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
