#!/usr/bin/env node

/**
 * 这种用法是为了防止用户没有将node装在默认的/usr/bin路径里。
 * 当系统看到这一行的时候，首先会到env设置里查找node的安装路径，再调用对应路径下的解释器程序完成操作。
 */

"use strict";

const cmd = require("commander");
const shell = require("shelljs");

const pkgJson = require("../package.json");
const version = pkgJson.version;

cmd
    .version(version)
    .description([
        "***************",
        "your Man Friday",
        "***************"
    ].join("\n"))
    .option("-H, --hey", "something link 'Hey Siri'?");

cmd
    .command("open <app>")
    .option("--no-secure", "open chrome with web security disabled")
    .description("open app")
    .action((app: string, _cmd: any) => {
        if (app === "chrome") {
            if (!_cmd.secure) {
                return shell.exec("open -a Google\\ Chrome --args --disable-web-security --user-data-dir");
            }
            shell.exec("open -a Google\\ Chrome");
        }
        return true;
    });

cmd.parse(process.argv);

if (cmd.hey) console.log("Hey, I'm Friday~");