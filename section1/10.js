const fs = require("fs");
const input = fs.readFileSync("section1/10.txt").toString().trim().split("\n");

let arr = input[0].split("");

arr = arr.filter(ele => ele==input[1]);

console.log(arr.length);
