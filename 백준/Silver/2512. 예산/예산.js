let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(inputs[0]);
const requests = inputs[1].split(' ').map(Number);
const totalBudget = Number(inputs[2]);
const maxRequest = Math.max(...requests);

let requestTotal = requests.reduce((acc, num) => acc + num, 0);

if (requestTotal <= totalBudget) {
  console.log(maxRequest);
  return;
}

let left = 0;
let right = maxRequest;
let answer = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let sum = requests.reduce((acc, num) => acc + Math.min(num, mid), 0);

  if (sum <= totalBudget) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
