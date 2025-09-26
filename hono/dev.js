// hono/dev.js
import { execSync } from "child_process";

function run(cmd, cwd = ".") {
  console.log(`▶️  ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd });
}

try {
  // 1. Build du frontend
  run("npm run build", "../frontend");

  // 2. Patch du plan
  run("node .qwik-server/patch-plan.js", "./");

  // 3. Lancer wrangler (reste actif)
  run("wrangler dev", "./");
} catch (err) {
  console.error("❌ Erreur pendant le script dev :", err);
  process.exit(1);
}
