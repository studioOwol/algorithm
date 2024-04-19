const { copyFileSync } = require('fs');

let x = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let bitCount = 0;

// while (x > 0) {
//   bitCount += x % 2;
//   x = Math.floor(x / 2);
// }

// while (x > 0) {
//   bitCount += x & 1;
//   x >>= 1;
// }

while (x > 0) {
  x &= x - 1;
  bitCount++;
}

console.log(bitCount);
