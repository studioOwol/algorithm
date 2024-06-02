let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [k, n] = t.split(' ').map(Number);
let lans = inputs.map(Number);
let left = 1;
let right = Math.max(...lans);
let result = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let cnt = 0;

  for (let lan of lans) {
    cnt += Math.floor(lan / mid);
  }

  if (cnt >= n) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
