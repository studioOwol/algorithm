let [l, str] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let L = +l;
let hash = 0;
let r = 1;

for (let i = 0; i < L; i++) {
  hash += (str.charCodeAt(i) - 96) * r;
  hash %= 1234567891;
  r *= 31;
  r %= 1234567891;
}

console.log(hash);
