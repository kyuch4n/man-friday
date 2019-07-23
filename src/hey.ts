"use strict";

export class Hey {
  private cmd: any;

  constructor() {
    this.cmd = require("commander");
  }

  register() {
    this.cmd.option("-H, --hey", "something link 'Hey Siri'?");
    return this;
  }

  sayHey() {
    if (this.cmd.hey) console.log("Hey, I'm Friday~");
  }
}