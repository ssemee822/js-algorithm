const fs = require("fs");
const input = fs.readFileSync("section2/3.txt").toString().trim().split("\n");
input.shift();

console.log(input);
const a_arr = input[0].split(" ");
const b_arr = input[1].split(" ");

a_arr.forEach((ele, idx) => {
  console.log(isWin(ele, b_arr[idx]));
})

function isWin(a, b){
  if (a == b) return 'D';
  if (a == 1){
    if (b == 2) return 'B';
  }
  else if (a == 2){
    if (b == 3) return 'B';
  }
  else if (a == 3){
    if (b == 1) return 'B';
  }
  return 'A';
}