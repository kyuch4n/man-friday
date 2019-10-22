"use strict";
exports.__esModule = true;
var pm2 = require("pm2");
var spawn = require("child_process").spawn;
var timeout = parseInt(process.argv.pop());
setTimeout(function () {
    spawn("/System/Library/CoreServices/Menu Extras/User.menu/Contents/Resources/CGSession", ["-suspend"]);
    pm2["delete"](process.env.pm_id);
}, timeout * 1000);
exports["default"] = {};
//# sourceMappingURL=lock.js.map