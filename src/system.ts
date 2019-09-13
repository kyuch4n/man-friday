"use strict";

const path = require("path");
const notifier = require("node-notifier");

function lock(timeout: number = 0) {
  setTimeout(() => {
    const spawn = require("child_process").spawn;
    spawn("/System/Library/CoreServices/Menu Extras/User.menu/Contents/Resources/CGSession", ["-suspend"]);
  }, timeout * 1000);

  if (timeout > 3) {
    notifier.notify({
      title: "this is Friday",
      message: `Your mac will be locked after ${timeout}s~`,
      icon: path.resolve(__dirname, "../src/assets/logo.png"),
      sound: true,
    });
  }
}

export default {
  lock,
};