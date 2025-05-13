const fs = require("fs");
const input = fs.readFileSync("section1/16.txt").toString().trim().split("");

const arr = [...new Set(input)];
let res="";

arr.forEach(ele => {res+=ele});

console.log(res);