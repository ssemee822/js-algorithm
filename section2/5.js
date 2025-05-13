const fs = require("fs");
const input = fs.readFileSync("section2/5.txt").toString().trim().split("\n")[1].split(" ");
const arr = [];
let cur;
const res = [...input];

input.sort((a,b) => b-a);

input.forEach((ele, idx) => {
  if (cur != ele) {
    arr[ele] = idx+1;
    cur = ele;
  }
});

console.log(...res.map(ele => arr[ele]));
