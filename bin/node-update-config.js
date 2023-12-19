#!/usr/bin/env node

const process = require("node:process");
const https = require("https");
const fs = require("fs");
const { exec } = require("node:child_process");
const { promisify } = require("node:util");
const commandExistSync = require("command-exists").sync

const outputDir = `./node_modules/mfx-ui-config`;
const configDir = `./node_modules/@mediafellows/mfx-ui-config`;
const tempDir = `./node_modules/@mediafellows/mfx-ui-config/temp`;

const tempFile = `${tempDir}/config.tmp`;
const hasConfigDir = fs.existsSync(configDir);
const hasOutputDir = fs.existsSync(outputDir);

const hasTempDir = fs.existsSync(tempDir);
const _exec = promisify(exec);

if (!commandExistSync("scrambler")) {
  console.log(
    `⚠️ Warning: scrambler is not installed, mock file not ready for node config..`,
  );
  process.exit();
}

if (!hasConfigDir) {
  console.log(
    `⚠️ Warning: @mediafellows/mfx-ui-config not found in node_modules`,
  );
  process.exit();
}

if (!hasTempDir) {
  fs.mkdirSync(tempDir);
  fs.writeFileSync(tempFile, "");
}

async function callScrambler() {
  const { stdout, stderr } = await _exec(`scrambler read ${tempFile}`);

  if (stdout) {
    if (!hasOutputDir) {
      fs.mkdirSync(outputDir);
    }

    fs.writeFileSync(`${outputDir}/index.js`, stdout);
    console.log("");
    console.log("✔️ MFX config updated!");
    console.log("");
  }

  if (stderr) {
    console.log(`⚠️ Warning: Failed to write scrambler file`);
  }
}

const stream = fs.createWriteStream(tempFile);

https
  .get(
    "https://raw.githubusercontent.com/mediafellows/mfx-ui-config/master/index.js",
    (res) => {
      res.pipe(stream);
      res.on("end", async () => {
        stream.close();
        await callScrambler(tempFile);
      });
    },
  )
  .on("error", (error) => {
    stream.close();
    console.error(error);
    console.log(`⚠️ Warning: Failed to download config file..`);
  });
