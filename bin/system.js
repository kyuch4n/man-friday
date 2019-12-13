"use strict";
exports.__esModule = true;
var path = require("path");
var pm2 = require("pm2");
var notifier = require("node-notifier");
function lock(timeout) {
    if (timeout === void 0) { timeout = 0; }
    pm2.start({
        instances: 1,
        exec_mode: "cluster",
        script: "./modules/lock.js",
        args: timeout
    }, function (err) {
        if (err)
            console.log(err);
        pm2.disconnect();
    });
    if (timeout > 3) {
        notifier.notify({
            title: "this is Friday",
            message: "Your mac will be locked after " + timeout + "s~",
            icon: path.resolve(__dirname, "./assets/logo.png"),
            sound: true
        });
    }
}
exports["default"] = {
    lock: lock
};
//# sourceMappingURL=system.js.map