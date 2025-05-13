const fs = require("fs");
const input = fs.readFileSync("section1/17.txt").toString().trim().split("\n");
input.shift();
const arr = [...new Set(input)];

arr.forEach(ele => {console.log(ele)});
