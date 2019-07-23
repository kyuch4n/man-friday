"use strict";
exports.__esModule = true;
var Hey = (function () {
    function Hey() {
        this.cmd = require("commander");
    }
    Hey.prototype.register = function () {
        this.cmd.option("-H, --hey", "something link 'Hey Siri'?");
        return this;
    };
    Hey.prototype.sayHey = function () {
        if (this.cmd.hey)
            console.log("Hey, I'm Friday~");
    };
    return Hey;
}());
exports.Hey = Hey;
//# sourceMappingURL=hey.js.map