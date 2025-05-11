const fs = require("fs");
const input = fs.readFileSync("section1/7.txt").toString().trim().split("\n");
const num = input[0];
let arr = input[1].split(" ");
let res = 0;

arr.forEach(ele => {
  if (ele[1] == num) res++;
});

console.log(res);