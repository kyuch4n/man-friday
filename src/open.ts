"use strict";

const opn = require("open");

function googleSearch(text: string) {
  opn(`https://www.google.com/search?q=${text}`, { app: "google chrome" });
}

module.exports = {
  googleSearch,
};
