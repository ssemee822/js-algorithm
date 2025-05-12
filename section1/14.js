const fs = require("fs");
const input = fs.readFileSync("section1/14.txt").toString().trim().split("\n");

input.shift();
input.sort((a,b) => b.length - a.length);

console.log(input[0]);