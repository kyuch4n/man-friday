"use strict";

const shell = require("shelljs");

function updateFriday() {
  console.log("start downloading...");
  shell.exec("npm install -g man-friday@latest");
}

function launchChrome(secure: boolean) {
  if (!secure) {
    return shell.exec("open -a Google\\ Chrome --args --disable-web-security --user-data-dir");
  }
  return shell.exec("open -a Google\\ Chrome");
}

function restartChrome(secure: boolean) {
  shell.exec("killall Google\\ Chrome");
  launchChrome(secure);
}

export default {
  updateFriday,
  launchChrome,
  restartChrome,
};