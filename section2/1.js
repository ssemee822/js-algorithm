const fs = require("fs");
const input = fs.readFileSync("section2/1.txt").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
const res = [];

arr.forEach((ele, idx) => {
  if (idx == 0) res.push(ele);
  if (ele > arr[idx-1]) res.push(ele);
})

console.log(...res);
