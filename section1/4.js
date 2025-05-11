const fs = require("fs");
const input = fs.readFileSync("section1/4.txt").toString();

let res = 0;
for (let cur=1; cur<=input; cur++) res+=cur;

console.log(res);
