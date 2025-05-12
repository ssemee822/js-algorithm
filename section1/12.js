const fs = require("fs");
const input = fs.readFileSync("section1/12.txt").toString().trim().split("");
let res = ""

input.forEach(ele => {
  res += ele.toUpperCase();
})

console.log(res);