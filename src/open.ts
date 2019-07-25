"use strict";

const shell = require("shelljs");

export class Open {
  private cmd: any;

  constructor() {
    this.cmd = require("commander");
  }

  register(): Open {
    this.cmd
      .command("open <app>")
      .option("--no-secure", "open chrome with web security disabled")
      .action((app: string) => {
        switch (app) {
          case "chrome": return this.openChrome();
          default: break;
        }
      });
    return this;
  }

  private openChrome() {
    if (!this.cmd.secure) {
      return shell.exec("open -a Google\\ Chrome --args --disable-web-security --user-data-dir");
    }
    return shell.exec("open -a Google\\ Chrome");
  }
}