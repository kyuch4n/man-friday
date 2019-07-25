"use strict";

export class Version {
  private cmd: any;
  version: string;

  constructor() {
    this.cmd = require("commander");

    const pkgJson = require("../package.json");
    this.version = pkgJson.version;
  }

  register(): Version {
    this.cmd.version(this.version).description(["***************", "your Man Friday", "***************"].join("\n"));
    return this;
  }
}