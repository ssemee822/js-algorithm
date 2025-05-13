const fs = require("fs");
const input = fs.readFileSync("section2/2.txt").toString().trim().split("\n")

const arr = input[1].split(" ").map(Number);
let cur;
const res = [arr[0]];

arr.forEach((ele, idx) => {
  if (idx == 0) cur = ele;
  if (cur < ele) {
    res.push(ele);
    cur = ele;
  }
});

console.log(res.length);
