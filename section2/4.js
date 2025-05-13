const fs = require("fs");
const input = fs.readFileSync("section2/4.txt").toString().trim().split("\n");
input.shift();

const arr = input[0].split(" ");
let bonus = 0;
let res = 0;

arr.forEach(ele => {
  if (ele == 1) {
    bonus ++;
    res += bonus;
  }
  else bonus = 0;
});

console.log(res);