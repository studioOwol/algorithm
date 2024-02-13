const fs = require('fs');

let [n, k] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const jump = (n, k) => {
  if (k <= n) {
    return n - k;
  }

  if (k === 1) {
    return 1;
  }

  if (k % 2 === 1) {
    return 1 + Math.min(jump(n, k - 1), jump(n, k + 1));
  }

  if (k % 2 === 0) {
    return Math.min(k - n, 1 + jump(n, k / 2));
  }
};

console.log(jump(n, k));
