"use strict";
exports.__esModule = true;
var shell = require("shelljs");
var Open = (function () {
    function Open() {
        this.cmd = require("commander");
    }
    Open.prototype.register = function () {
        var _this = this;
        this.cmd
            .command("open <app>")
            .option("--no-secure", "open chrome with web security disabled")
            .action(function (app) {
            switch (app) {
                case "chrome": return _this.openChrome();
                default: break;
            }
        });
        return this;
    };
    Open.prototype.openChrome = function () {
        if (!this.cmd.secure) {
            return shell.exec("open -a Google\\ Chrome --args --disable-web-security --user-data-dir");
        }
        return shell.exec("open -a Google\\ Chrome");
    };
    return Open;
}());
exports.Open = Open;
//# sourceMappingURL=open.js.map