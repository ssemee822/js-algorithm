const fs = require("fs");
const input = fs.readFileSync("section3/4.txt").toString().split(" ");
const arr = input[0].split("");
const t = input[1];
let res = [];

arr.forEach((ele, idx) => {
  if (ele == t) res.push(0);
  else {
    for (var i = 1; arr[idx + i] || arr[idx - i]; i++) {
      if (t == arr[idx + i] || t == arr[idx - i]) {
        res.push(i);
        return;
      }
    }
  }
});

console.log(...res);
