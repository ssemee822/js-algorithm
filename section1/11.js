const fs = require("fs");
const input = fs.readFileSync("section1/11.txt").toString().trim().split("");
let res = 0;

input.forEach(ele => {
  if ("A" <= ele & ele <= "Z") res++;
})

console.log(res);