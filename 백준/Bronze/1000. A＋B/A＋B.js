const fs = require('fs');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
