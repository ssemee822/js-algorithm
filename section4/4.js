const fs = require("fs");
const input = fs.readFileSync("section4/4.txt").toString().trim().split("\n");
const N = input[0].split(" ")[0];
const M = input[0].split(" ")[1];
input.shift();
console.log(input);
console.log(N);
console.log(M);
