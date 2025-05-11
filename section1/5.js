const fs = require("fs");
const input = fs.readFileSync("section1/5.txt").toString().trim().split(" ");

let arr = input.sort((a,b)=>a-b);
console.log(arr[0]);