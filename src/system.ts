"use strict";

const path = require("path");
const program = require("commander");
const notifier = require("node-notifier");

function exec() {
  /**
   * friday -l, --lock
   */
  if (program.lock) {
    const seconds = parseInt(program.lock) || 0;

    setTimeout(() => {
      const spawn = require("child_process").spawn;
      spawn("/System/Library/CoreServices/Menu Extras/User.menu/Contents/Resources/CGSession", ["-suspend"]);
    }, seconds * 1000);

    if (seconds > 3) {
      notifier.notify({
        title: "I'm Friday",
        message: `Your mac will be locked after ${seconds}s~`,
        icon: path.resolve(__dirname, "../src/assets/friday.jpeg"),
        sound: true,
      });
    }
  }
}

export default {
  exec,
};