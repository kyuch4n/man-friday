#!/usr/bin/env node

/**
 * 这种用法是为了防止用户没有将node装在默认的/usr/bin路径里。
 * 当系统看到这一行的时候，首先会到env设置里查找node的安装路径，再调用对应路径下的解释器程序完成操作。
 */

"use strict";

const program = require("commander");
const pkgJson = require("../package.json");

import system from "./system";
import application from "./application";
import { translate } from "./translate";

const { googleSearch } = require("./open")

program
  .version(pkgJson.version);

program
  .command("lock [timeout]")
  .description("lock my mac immediately or after several seconds")
  .action((timeout: number, cmd: any) => {
    system.lock(timeout);
  });

program
  .command("update")
  .description("update friday to latest version")
  .action(() => {
    application.updateFriday();
  });

program
  .command("open [name]")
  .description("open app")
  .option("--no-secure", "open chrome and disable web security")
  .action((name: string, cmd: any) => {
    switch (name) {
      case "chrome": return application.launchChrome(cmd.secure);
      default: return;
    }
  });

program
  .command("restart [name]")
  .description("restart app")
  .option("--no-secure", "restart chrome and disable web security")
  .action((name: string, cmd: any) => {
    switch (name) {
      case "chrome": return application.restartChrome(cmd.secure);
      default: return;
    }
  });

program
  .command("translate [text]")
  .alias("transl")
  .action((text: string, cmd: any) => {
    translate(text);
  });

program
  .command("search [text]")
  .action((text: string, cmd: any) => {
    googleSearch(text);
  });

program.parse(process.argv);