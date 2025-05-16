const fs = require("fs");
const input = fs.readFileSync("section3/3.txt").toString().trim().split("");
let res = "";

input.forEach((ele) => {
  if ("0" <= ele && ele <= "9") res += ele;
});

console.log(parseInt(res));
