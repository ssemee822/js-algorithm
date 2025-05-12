const fs = require("fs");
const input = fs.readFileSync("section1/13.txt").toString().trim().split("");
let res = "";

input.forEach(ele => {
  if ("A" <= ele & ele <= "Z") res += ele.toLowerCase();
  else res += ele.toUpperCase();
})

console.log(res);