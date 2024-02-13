const fs = require('fs');

let [n, line] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

line.sort((a, b) => a - b);
let sum = 0;
let answer = 0;

line.forEach((num) => {
  sum += num;
  answer += sum;
});

console.log(answer);
