#!/usr/bin/env node
/**
 * postbuild.js
 *
 * Runs after `npm run build` to make .output/public/ deployable on GitHub Pages.
 *
 * Nitro's cloudflare-module preset does NOT produce an index.html — it runs SSR
 * dynamically. For static GitHub Pages deployment we must generate one ourselves.
 *
 * This script:
 *   1. Reads the built CSS/JS filenames from .output/public/assets/
 *   2. Generates a complete index.html shell that bootstraps the React SPA
 *   3. Injects the SPA path-restoration script (sessionStorage trick)
 *   4. Writes 404.html that stores the path and redirects to index.html
 *
 * The repo base path is "/alwin-s-digital-hub/".
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, ".output", "public");
const ASSETS_DIR = resolve(OUT_DIR, "assets");
const BASE = "/Alwin-s-Portfolio";

// ── 1. Discover built asset filenames ────────────────────────────────────────
if (!existsSync(ASSETS_DIR)) {
  console.error(`❌  ${ASSETS_DIR} not found. Did the build run first?`);
  process.exit(1);
}

const assetFiles = readdirSync(ASSETS_DIR);

const cssFile = assetFiles.find((f) => f.endsWith(".css"));
const mainJs = assetFiles.find((f) => f.startsWith("index") && f.endsWith(".js"));
const routesJs = assetFiles.find((f) => f.startsWith("routes") && f.endsWith(".js"));

if (!cssFile || !mainJs) {
  console.error("❌  Could not find built CSS/JS assets in", ASSETS_DIR);
  console.error("    Found:", assetFiles);
  process.exit(1);
}

console.log(`✅  Found assets: ${cssFile}, ${mainJs}${routesJs ? ", " + routesJs : ""}`);

// ── 2. SPA path-restoration script ───────────────────────────────────────────
//    When 404.html redirects here it puts the original path in sessionStorage.
//    This reads it back and does history.replaceState before React boots.
const restorationScript = `
    <!-- GitHub Pages SPA routing restoration -->
    <script>
      (function () {
        var redirect = sessionStorage.getItem('gh-pages-redirect');
        if (redirect) {
          sessionStorage.removeItem('gh-pages-redirect');
          history.replaceState(null, '', redirect);
        }
      })();
    </script>`;

// ── 3. Generate index.html shell ──────────────────────────────────────────────
//    TanStack Start (SSR) normally renders this dynamically per-request.
//    For GitHub Pages we produce the SPA shell manually.
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Alwin — Software &amp; Security Testing Specialist</title>
  <meta name="description" content="Professional portfolio of Alwin, a B.Tech CSE (AI) student specializing in software test automation, API endpoint validation, and application security auditing." />
  <meta name="author" content="Alwin" />
  <meta property="og:title" content="Alwin — Software &amp; Security Testing Specialist" />
  <meta property="og:description" content="B.Tech CSE (AI) student &amp; ex-Software Testing Intern at Data Repo LLC. Focused on test automation, API security, and software resilience." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" href="${BASE}/favicon.ico" type="image/x-icon" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" />
  <link rel="stylesheet" href="${BASE}/assets/${cssFile}" />
  ${restorationScript}
</head>
<body>
  <div id="root"></div>
  ${routesJs ? `<script type="module" src="${BASE}/assets/${routesJs}"></script>` : ""}
  <script type="module" src="${BASE}/assets/${mainJs}"></script>
</body>
</html>
`;

const indexPath = resolve(OUT_DIR, "index.html");
writeFileSync(indexPath, indexHtml, "utf8");
console.log("✅  Written index.html to", OUT_DIR);

// ── 4. Write 404.html ─────────────────────────────────────────────────────────
//    GitHub Pages serves this for any path it can't find.
//    It stores the full intended path in sessionStorage then sends the browser
//    to index.html, which restores the path before React Router boots.
const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Redirecting…</title>
  <script>
    // GitHub Pages SPA fallback — preserve the intended URL across the redirect
    sessionStorage.setItem('gh-pages-redirect', window.location.pathname + window.location.search);
    window.location.replace('${BASE}/');
  </script>
</head>
<body>
  <p>Redirecting&hellip;</p>
</body>
</html>
`;

const notFoundPath = resolve(OUT_DIR, "404.html");
writeFileSync(notFoundPath, notFoundHtml, "utf8");
console.log("✅  Written 404.html to", OUT_DIR);

console.log("\n✅  Post-build complete. .output/public/ is ready for GitHub Pages.\n");
