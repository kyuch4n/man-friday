#!/usr/bin/env node
"use strict";
var Friday = (function () {
    function Friday() {
        var Version = require("./version").Version;
        var Hey = require("./hey").Hey;
        var Open = require("./open").Open;
        this.version = new Version().register();
        this.hey = new Hey().register();
        this.open = new Open().register();
        this.cmd = require("commander");
        this.cmd.parse(process.argv);
    }
    return Friday;
}());
var friday = new Friday();
friday.hey.sayHey();
//# sourceMappingURL=friday.js.map