let [[N, S], nums] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let sum = 0;
let start = 0;
let min = Infinity;

for (let end = 0; end < N; end++) {
  sum += nums[end];

  while (sum >= S) {
    sum -= nums[start];
    min = Math.min(min, end - start + 1);
    start++;
  }
}

console.log(min === Infinity ? 0 : min);
