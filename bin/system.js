"use strict";
exports.__esModule = true;
var path = require("path");
var program = require("commander");
var notifier = require("node-notifier");
function exec() {
    if (program.lock) {
        var seconds = parseInt(program.lock) || 0;
        setTimeout(function () {
            var spawn = require("child_process").spawn;
            spawn("/System/Library/CoreServices/Menu Extras/User.menu/Contents/Resources/CGSession", ["-suspend"]);
        }, seconds * 1000);
        if (seconds > 3) {
            notifier.notify({
                title: "I'm Friday",
                message: "Your mac will be locked after " + seconds + "s~",
                icon: path.resolve(__dirname, "../src/assets/friday.jpeg"),
                sound: true
            });
        }
    }
}
exports["default"] = {
    exec: exec
};
//# sourceMappingURL=system.js.map