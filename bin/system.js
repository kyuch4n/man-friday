"use strict";
exports.__esModule = true;
var path = require("path");
var notifier = require("node-notifier");
function lock(timeout) {
    if (timeout === void 0) { timeout = 0; }
    setTimeout(function () {
        var spawn = require("child_process").spawn;
        spawn("/System/Library/CoreServices/Menu Extras/User.menu/Contents/Resources/CGSession", ["-suspend"]);
    }, timeout * 1000);
    if (timeout > 3) {
        notifier.notify({
            title: "this is Friday",
            message: "Your mac will be locked after " + timeout + "s~",
            icon: path.resolve(__dirname, "../src/assets/logo.png"),
            sound: true
        });
    }
}
exports["default"] = {
    lock: lock
};
//# sourceMappingURL=system.js.map