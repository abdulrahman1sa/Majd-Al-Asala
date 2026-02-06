import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { log } from "./log";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist", "public");

  if (!fs.existsSync(distPath)) {
    log(`Warning: Build directory not found at ${distPath}. If this is production, the site will 404.`);
    return;
  }

  app.use(express.static(distPath));

  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
