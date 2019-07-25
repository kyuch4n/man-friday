#!/usr/bin/env node

/**
 * 这种用法是为了防止用户没有将node装在默认的/usr/bin路径里。
 * 当系统看到这一行的时候，首先会到env设置里查找node的安装路径，再调用对应路径下的解释器程序完成操作。
 */

"use strict";

import { Version } from "./version";
import { Hey } from "./Hey";
import { Open } from "./open";

class Friday {
  private cmd: any;
  version: Version;
  hey: Hey;
  open: Open;

  constructor() {
    this.version = new Version().register();
    this.hey = new Hey().register();
    this.open = new Open().register();

    this.cmd = require("commander");
    this.cmd.parse(process.argv);
  }
}

const friday = new Friday();
friday.hey.sayHey();