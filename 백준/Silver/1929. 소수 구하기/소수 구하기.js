let [m, n] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let answer = [];

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

for (let i = m; i <= n; i++) {
  if (isPrime(i)) {
    answer.push(i);
  }
}

console.log(answer.join('\n'));
