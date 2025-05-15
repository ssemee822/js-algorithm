const fs = require("fs");
const input = fs
  .readFileSync("section3/1.txt")
  .toString()
  .trim()
  .toLowerCase()
  .split("");
const last_idx = input.length - 1;
let res = true;

input.forEach((ele, idx) => {
  if (idx <= last_idx / 2) {
    if (ele != input[last_idx - idx]) res = false;
  }
});

console.log(res);
