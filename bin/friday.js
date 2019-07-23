#!/usr/bin/env node
"use strict";
var cmd = require("commander");
var shell = require("shelljs");
var pkgJson = require("../package.json");
var version = pkgJson.version;
cmd
    .version(version)
    .description([
    "***************",
    "your Man Friday",
    "***************"
].join("\n"))
    .option("-H, --hey", "something link 'Hey Siri'?");
cmd
    .command("open <app>")
    .option("--no-secure", "open chrome with web security disabled")
    .description("open app")
    .action(function (app, _cmd) {
    if (app === "chrome") {
        if (!_cmd.secure) {
            return shell.exec("open -a Google\\ Chrome --args --disable-web-security --user-data-dir");
        }
        shell.exec("open -a Google\\ Chrome");
    }
    return true;
});
cmd.parse(process.argv);
if (cmd.hey)
    console.log("Hey, I'm Friday~");
//# sourceMappingURL=friday.js.map