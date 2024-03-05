let [m, n] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let answer = [];
let isPrime = Array(n + 1).fill(true);
isPrime[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
  for (let j = i * i; j <= n; j += i) {
    isPrime[j] = false;
  }
}

for (let i = m; i <= n; i++) {
  if (isPrime[i]) {
    answer.push(i);
  }
}

console.log(answer.join('\n'));
