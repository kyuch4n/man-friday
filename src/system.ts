"use strict";

const path = require("path");
const pm2 = require("pm2");
const notifier = require("node-notifier");

function lock(timeout: number = 0) {
  pm2.start({
    instances: 1,
    exec_mode: "cluster",
    script: path.resolve(__dirname, "./modules/lock.js"),
    args: timeout,
  }, (err: any) => {
    if (err) console.log(err);
    pm2.disconnect();
  });

  if (timeout > 3) {
    notifier.notify({
      title: "this is Friday",
      message: `Your mac will be locked after ${timeout}s~`,
      icon: path.resolve(__dirname, "./assets/logo.png"),
      sound: true,
    });
  }
}

export default {
  lock,
};