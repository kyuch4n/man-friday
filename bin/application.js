"use strict";
exports.__esModule = true;
var shell = require("shelljs");
function updateFriday() {
    console.log("start downloading...");
    shell.exec("npm install -g man-friday@latest");
}
function launchChrome(secure) {
    if (!secure) {
        return shell.exec("open -n /Applications/Google Chrome.app/ --args --disable-web-security  --auto-open-devtools-for-tabs --user-data-dir=/Users/${USER}/MyChromeDevUserData");
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