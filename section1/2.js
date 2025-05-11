const fs = require("fs");
const input = fs.readFileSync("/Users/kimsemin/Desktop/js-algorithm/section1/2.txt").toString().trim().split(" ");

const solution = () => { 
  let arr = input.map(Number);
  arr.sort((a,b)=>a-b);
  if (arr[0]+arr[1] > arr[2]) console.log("YES");
  else console.log("NO");
}
 
solution();