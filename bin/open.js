"use strict";
var opn = require("open");
function googleSearch(text) {
    opn("https://www.google.com/search?q=" + text, { app: "google chrome" });
}
module.exports = {
    googleSearch: googleSearch
};
//# sourceMappingURL=open.js.map