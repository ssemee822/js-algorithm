const fs = require("fs");
const input = fs.readFileSync("section4/3.txt").toString().trim().split("\n");
const N = input[0][0];
const M = input[0][2];
const res = [];
const r_res = [];

input.shift();

for (var i = 1; i <= N; i++) {
  for (var j = i + 1; j <= N; j++) {
    res.push([i, j]);
    res.push([j, i]);
  }
}

input.forEach((ele) => {
  const arr = ele.split(" ");
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      r_res.push([arr[j], arr[i]]);
    }
  }
});

const banSet = new Set(r_res.map((e) => `${e[0]}-${e[1]}`));

const filtered = res.filter((ele) => {
  return !banSet.has(`${ele[0]}-${ele[1]}`);
});

console.log(filtered.length);
