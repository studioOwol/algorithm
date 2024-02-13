const fs = require('fs');

let [n, line] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

line.sort((a, b) => a - b);
let sum = 0;

let answer = line.reduce((acc, num) => {
  sum += num;
  return acc + sum;
}, 0);

console.log(answer);