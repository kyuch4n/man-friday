"use strict";
exports.__esModule = true;
var shell = require("shelljs");
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
    launchChrome: launchChrome,
    restartChrome: restartChrome
};
//# sourceMappingURL=application.js.map