const fs = require("fs");
const input = fs.readFileSync("section1/6.txt").toString().trim().split(" ");
let arr = [];
let sum = 0;

input.map((ele) => ele % 2 != 0 ? arr.push(parseInt(ele)) : null);
arr.sort((a,b)=>a-b);
arr.map((ele) => sum+=ele);

console.log(sum);
console.log(arr[0]);
