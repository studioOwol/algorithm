let [info, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, M] = info.split(' ').map(Number);
const times = inputs.map(Number);

times.sort((a, b) => a - b);

let left = BigInt(times[0]);
let right = BigInt(times[N - 1]) * BigInt(M);
let result = right;

while (left <= right) {
  let mid = (left + right) / 2n;
  let count = 0n;

  for (let time of times) {
    count += mid / BigInt(time);

    if (count >= BigInt(M)) break;
  }

  if (count >= BigInt(M)) {
    result = mid;
    right = mid - 1n;
  } else {
    left = mid + 1n;
  }
}

console.log(result.toString());
