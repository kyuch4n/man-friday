#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var system_1 = require("./system");
var application_1 = require("./application");
var program = require("commander");
var pkgJson = require("../package.json");
program
    .version(pkgJson.version);
program
    .option("-l, --lock [timeout]", "lock my mac immediately or after several seconds");
program
    .command("open")
    .option("-n, --name <name>", "open app")
    .option("--no-secure", "open chrome and disable web security")
    .action(function (cmd) {
    switch (cmd.name) {
        case "chrome": return application_1["default"].launchChrome(cmd.secure);
        default: return;
    }
});
program
    .command("restart")
    .option("-n, --name <name>", "restart app")
    .option("--no-secure", "restart chrome and disable web security")
    .action(function (cmd) {
    switch (cmd.name) {
        case "chrome": return application_1["default"].restartChrome(cmd.secure);
        default: return;
    }
});
program.parse(process.argv);
system_1["default"].exec();
//# sourceMappingURL=index.js.map