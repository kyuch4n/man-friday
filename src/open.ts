"use strict";

export class Open {
  private cmd: any;
  private shell: any;

  constructor() {
    this.cmd = require("commander");
    this.shell = require("shelljs");
  }

  register() {
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
      return this.shell.exec("open -a Google\\ Chrome --args --disable-web-security --user-data-dir");
    }
    return this.shell.exec("open -a Google\\ Chrome");
  }
}