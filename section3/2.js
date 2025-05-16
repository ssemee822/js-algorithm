const fs = require("fs");
const input = fs
  .readFileSync("section3/2.txt")
  .toString()
  .trim()
  .toLowerCase()
  .split("");
const last_idx = input.length - 1;
let res = "YES";

input.forEach((ele, idx) => {
  if ("a" <= ele && ele < "z") {
    if (idx <= last_idx / 2) {
      if (ele != input[last_idx - idx]) res = "NO";
    }
  }
});

console.log(res);
