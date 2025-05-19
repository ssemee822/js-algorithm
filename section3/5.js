const fs = require("fs");
const input = fs.readFileSync("section3/5.txt").toString().split("");
let n = input[0];
let num = 0;
let res = "";

input.forEach((ele, idx) => {
  if (ele != n) {
    res += n + (num == 1 ? "" : num);
    n = ele;
    num = 0;
    num++;
  } else {
    num++;
  }
});
res += n + (num == 1 ? "" : num);

console.log(res);
