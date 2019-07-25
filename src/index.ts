#!/usr/bin/env node

/**
 * 这种用法是为了防止用户没有将node装在默认的/usr/bin路径里。
 * 当系统看到这一行的时候，首先会到env设置里查找node的安装路径，再调用对应路径下的解释器程序完成操作。
 */

"use strict";

import system from "./system";
import application from "./application";

const program = require("commander");
const pkgJson = require("../package.json");

/********************************************************************
 * define
 ********************************************************************/
/**
 * friday -V, --version
 */
program
  .version(pkgJson.version);

/**
 * friday -l, --lock
 */
program
  .option("-l, --lock [timeout]", "lock my mac immediately or after several seconds");

/**
 * friday open -n chrome --no-secure
 */
program
  .command("open")
  .option("-n, --name <name>", "open app")
  .option("--no-secure", "open chrome and disable web security")
  .action((cmd: any) => {
    switch (cmd.name) {
      case "chrome": return application.launchChrome(cmd.secure);
      default: return;
    }
  });

/**
 * friday restart -n chrome --no-secure
 */
program
  .command("restart")
  .option("-n, --name <name>", "restart app")
  .option("--no-secure", "restart chrome and disable web security")
  .action((cmd: any) => {
    switch (cmd.name) {
      case "chrome": return application.restartChrome(cmd.secure);
      default: return;
    }
  });

program.parse(process.argv);

/********************************************************************
 * exec
 ********************************************************************/
system.exec();