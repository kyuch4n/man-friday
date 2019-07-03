#!/usr/bin/env node
/**
 * 这种用法是为了防止用户没有将node装在默认的/usr/bin路径里。
 * 当系统看到这一行的时候，首先会到env设置里查找node的安装路径，再调用对应路径下的解释器程序完成操作。
 */
"use strict";
var cmd = require("commander");
cmd
    .command("test")
    .description("可用性测试")
    .action(function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log("success");
});
cmd.parse(process.argv);
