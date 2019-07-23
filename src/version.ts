"use strict";

export class Version {
  private cmd: any;
  private version: string;

  constructor() {
    this.cmd = require("commander");

    const pkgJson = require("../package.json");
    this.version = pkgJson.version;
  }

  register() {
    this.cmd.version(this.version).description(["***************", "your Man Friday", "***************"].join("\n"));
    return this;
  }
}