const fs = require("fs");
let input = fs
  .readFileSync("section4/1.txt")
  .toString()
  .split("\n")[1]
  .split(" ");
let res = 0;
let max = 0;

input.forEach((ele, idx) => {
  let arr = ele.split("");
  let sum = 0;
  arr.forEach((e) => {
    sum += parseInt(e);
  });
  if (max < sum) {
    res = idx;
    max = sum;
  }
  if (max == sum) {
    if (arr[res] > ele) return;
    res = idx;
    max = sum;
  }
});

console.log(input[res]);
