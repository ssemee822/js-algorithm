const fs = require("fs");
const input = fs.readFileSync("section2/6.txt").toString().trim().split("\n");
const sum_arr = [];
let sum = 0;
input.shift();

let arr = input.map((ele) => ele.split(" "));

console.log(arr);

arr.forEach((ele) => {
  sum_arr.push(ele.reduce((a, b) => parseInt(a) + parseInt(b)));
});

for (var i = 0; i < 5; i++) {
  arr.forEach((ele) => {
    sum += parseInt(ele[i]);
  });
  sum_arr.push(sum);
  sum = 0;
}

for (var i = 0; i < 5; i++) {
  sum += parseInt(arr[i][i]);
}
sum_arr.push(sum);
sum = 0;

for (var i = 0; i < 5; i++) {
  sum += parseInt(arr[i][4 - i]);
}
sum_arr.push(sum);

console.log(Math.max(...sum_arr));
