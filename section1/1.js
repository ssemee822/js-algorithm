const fs = require("fs");
const input = fs.readFileSync("/Users/kimsemin/Desktop/js-algorithm/section1/1.txt").toString().trim().split(" ");
 
const solution = () => { 
  let arr = input.map(Number);
  let res = arr.sort((a,b) => a-b);
  console.log(res[0]);
}
 
solution();