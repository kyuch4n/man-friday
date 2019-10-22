"use strict";

const fs = require("fs");
const path = require("path");
const copydir = require("copy-dir");

const sourceDir = path.resolve(__dirname, "../src/assets");
const targetDir = path.resolve(__dirname, "../bin/assets");

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}
copydir.sync(sourceDir, targetDir);