
const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

// Start with a clean output directory.
fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });

// Copy the application entry point and source files.
fs.copyFileSync(
  path.join(rootDir, "server.js"),
  path.join(distDir, "server.js")
);

fs.cpSync(
  path.join(rootDir, "src"),
  path.join(distDir, "src"),
  { recursive: true }
);

console.log("Build completed successfully: dist/");
