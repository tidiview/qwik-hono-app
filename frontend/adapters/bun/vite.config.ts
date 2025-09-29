// frontend/adapters/bun/vite.config.ts
import { resolve } from "node:path";
import { extendConfig } from "@builder.io/qwik-city/vite";
import { _TextEncoderStream_polyfill } from "@builder.io/qwik-city/middleware/request-handler";
import baseConfig from "../../vite.config";
import { qwikCity } from "@builder.io/qwik-city/vite";

// This polyfill is required when you use SSG and build your app with Bun, because Bun does not have TextEncoderStream. See: https://github.com/oven-sh/bun/issues/5648
globalThis.TextEncoderStream ||= _TextEncoderStream_polyfill;

export default extendConfig(baseConfig, () => {
  return {
    plugins: [
      qwikCity(), // 👈 indispensable pour @qwik-city-plan
    ],
    build: {
    rollupOptions: {
      input: [
        resolve(__dirname, "../../src/entry.ssr.tsx"), // entrée SSR générique
        "@qwik-city-plan",                            // plan Qwik City
      ],
    },
    outDir: resolve(__dirname, "../../.qwik/server"), // sortie dans .qwik/server
    emptyOutDir: true
    }
  }
});
