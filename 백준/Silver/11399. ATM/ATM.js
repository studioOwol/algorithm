const fs = require('fs');

let [n, line] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

line.sort((a, b) => a - b);
let answer = [];

for (let i = 1; i <= n; i++) {
  let prevSum = line.slice(0, i).reduce((acc, value) => acc + value, 0);
  answer.push(prevSum);
}

console.log(answer.reduce((acc, value) => acc + value, 0));
