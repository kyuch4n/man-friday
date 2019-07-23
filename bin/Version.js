"use strict";
exports.__esModule = true;
var Version = (function () {
    function Version() {
        this.cmd = require("commander");
        var pkgJson = require("../package.json");
        this.version = pkgJson.version;
    }
    Version.prototype.register = function () {
        this.cmd.version(this.version).description(["***************", "your Man Friday", "***************"].join("\n"));
        return this;
    };
    return Version;
}());
exports.Version = Version;
//# sourceMappingURL=version.js.map