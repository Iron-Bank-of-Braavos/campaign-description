var fs = require("fs");
var text = fs.readFileSync("./data/data.txt", "utf-8");
var array = text.split("\n");

console.log(array);
