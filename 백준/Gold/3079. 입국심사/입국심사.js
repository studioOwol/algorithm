let [info, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = info.split(' ').map(Number);
const times = inputs.map(Number);

let left = BigInt(Math.min(...times));
let right = BigInt(Math.max(...times)) * BigInt(M);
let result = right;

while (left < right) {
  let mid = (left + right) / 2n;
  let count = 0n;

  for (let time of times) {
    count += mid / BigInt(time);

    if (count >= BigInt(M)) break;
  }

  if (count >= BigInt(M)) {
    result = mid;
    right = mid;
  } else {
    left = mid + 1n;
  }
}

console.log(result.toString());
