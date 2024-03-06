let [n, k] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(n) / (factorial(k) * factorial(n - k)));
