"use strict";
exports.__esModule = true;
var shell = require("shelljs");
function updateFriday() {
    console.log("start downloading...");
    shell.exec("npm install -g man-friday@latest");
}
function launchChrome(secure) {
    if (!secure) {
        return shell.exec("open -a Google\\ Chrome --args --disable-web-security --user-data-dir");
    }
    return shell.exec("open -a Google\\ Chrome");
}
function restartChrome(secure) {
    shell.exec("killall Google\\ Chrome");
    launchChrome(secure);
}
exports["default"] = {
    updateFriday: updateFriday,
    launchChrome: launchChrome,
    restartChrome: restartChrome
};
//# sourceMappingURL=application.js.map