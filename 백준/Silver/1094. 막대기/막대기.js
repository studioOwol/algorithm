let input = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString();

let N = input.toString(2);
let bitCount = 0;

// while (x > 0) {
//   bitCount += x % 2;
//   x = Math.floor(x / 2);
// }

// while (x > 0) {
//   bitCount += x & 1;
//   x >>= 1;
// }

// while (x > 0) {
//   x &= x - 1;
//   bitCount++;
// }

for (let i = 0; i < N.length; i++) {
  if (N[i] === '1') {
    bitCount++;
  }
}

console.log(bitCount);
