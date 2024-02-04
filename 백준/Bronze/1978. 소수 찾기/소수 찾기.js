const fs = require('fs');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

const numbers = input[1].split(' ').map(Number);
let cnt = 0;

for (let i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    cnt++;
  }
}

console.log(cnt);

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}
