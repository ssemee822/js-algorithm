const fs = require("fs");
const input = fs.readFileSync("section1/15.txt").toString().trim().split("");
const len = input.length;

if (len % 2 != 0){
  console.log(input[parseInt(len/2)]);
}
else {
  console.log(input.splice(len/2-1, 2));
}
