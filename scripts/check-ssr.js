// scripts/check-ssr.js
import { stat } from "fs/promises";

const paths = [
  "./frontend/server/entry.ssr.js",
  "./frontend/server/@qwik-city-plan.js",
];

for (const p of paths) {
  try {
    const s = await stat(p);
    console.log(`${p} -> OK (${s.size} bytes)`);
  } catch (e) {
    console.log(`${p} -> MISSING`);
  }
}
