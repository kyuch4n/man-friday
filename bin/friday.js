#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var version_1 = require("./version");
var Hey_1 = require("./Hey");
var open_1 = require("./open");
var Friday = (function () {
    function Friday() {
        this.version = new version_1.Version().register();
        this.hey = new Hey_1.Hey().register();
        this.open = new open_1.Open().register();
        this.cmd = require("commander");
        this.cmd.parse(process.argv);
    }
    return Friday;
}());
var friday = new Friday();
friday.hey.sayHey();
//# sourceMappingURL=friday.js.map