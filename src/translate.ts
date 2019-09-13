"use strict";

const chalk = require("chalk");
const youdao = require("youdao");
youdao.set({ keyfrom: "node-fanyi", key: "110811608" });

async function translate(text: string) {
  youdao.translate(text, (e: Error, result: string | string[]) => {
    if (result instanceof Array) {
      return result.forEach(
        (item: string) => console.log(chalk.yellow(item))
      );
    }
    console.log(chalk.yellow(result));
  });
}

export {
  translate,
};