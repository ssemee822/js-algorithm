const fs = require("fs");
const input = fs.readFileSync("section2/7.txt").toString().trim().split("\n");
const n = input[0];
let sum = 0;
input.shift();
let arr = input.map((ele) => ele.split(" "));

arr.forEach((ele, idx) => {
  arr[idx] = ele.map(Number);
});

arr.forEach((ele, i) => {
  ele.forEach((_e, j) => {
    let res = [_e];
    if (i != 0) res.push(arr[i - 1][j]);
    if (j != 0) res.push(arr[i][j - 1]);
    if (i != n - 1) res.push(arr[i + 1][j]);
    if (j != n - 1) res.push(arr[i][j + 1]);
    if (_e == Math.max(...res)) sum += 1;
  });
});
console.log(sum);
