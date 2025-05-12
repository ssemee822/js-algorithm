const fs = require("fs");
const input = fs.readFileSync("section1/9.txt").toString().trim().split("");
let res = "";

input.forEach((ele, idx) => {
  // if (ele == "A") input[idx] = "#";
  if (ele == "A") res+="#";
  else res+=ele;
});

console.log(res);