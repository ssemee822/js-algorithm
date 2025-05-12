const fs = require("fs");
let input = fs.readFileSync("section1/8.txt").toString().trim().split(" ");

input = input.map(Number);
let sum = input.reduce((a,b) => a+b);
let res = sum-100;

for (var i=0; input[i]; i++){
  for (var j=1; input[j]; j++){
    if (input[i]+input[j] == res){
      input.splice(i,1);
      input.splice(j-1,1);
      break;
    }
  }
}

console.log(input);