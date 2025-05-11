const fs = require("fs");
const input = fs.readFileSync("section1/3.txt").toString().trim().split("\n");

console.log(Math.ceil(input/12));