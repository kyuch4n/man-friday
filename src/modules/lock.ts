"use strict";

const pm2 = require("pm2");
const spawn = require("child_process").spawn;

const timeout: number = parseInt(process.argv.pop());

setTimeout(() => {
  spawn("/System/Library/CoreServices/Menu Extras/User.menu/Contents/Resources/CGSession", ["-suspend"]);
  pm2.delete(process.env.pm_id);
}, timeout * 1000);

export default {};
