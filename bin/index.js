#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var program = require("commander");
var pkgJson = require("../package.json");
var system_1 = require("./system");
var application_1 = require("./application");
var translate_1 = require("./translate");
program
    .version(pkgJson.version);
program
    .command("lock [timeout]")
    .description("lock my mac immediately or after several seconds")
    .action(function (timeout, cmd) {
    system_1["default"].lock(timeout);
});
program
    .command("update")
    .description("update friday to latest version")
    .action(function () {
    application_1["default"].updateFriday();
});
program
    .command("open [name]")
    .description("open app")
    .option("--no-secure", "open chrome and disable web security")
    .action(function (name, cmd) {
    switch (name) {
        case "chrome": return application_1["default"].launchChrome(cmd.secure);
        default: return;
    }
});
program
    .command("restart [name]")
    .description("restart app")
    .option("--no-secure", "restart chrome and disable web security")
    .action(function (name, cmd) {
    switch (name) {
        case "chrome": return application_1["default"].restartChrome(cmd.secure);
        default: return;
    }
});
program
    .command("translate [text]")
    .alias("transl")
    .action(function (text, cmd) {
    translate_1.translate(text);
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map