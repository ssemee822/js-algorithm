const fs = require("fs");
const input = fs
  .readFileSync("section4/2.txt")
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ");

let res = [];

function isP(num) {
  if (num == 1) return false;
  for (var i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

input.forEach((ele) => {
  let arr = ele.split("");
  let tmp = "";
  for (var i = arr.length - 1; i >= 0; i--) {
    tmp += arr[i];
  }
  tmp = parseInt(tmp);
  isP(tmp) ? res.push(tmp) : "";
});

console.log(...res);
