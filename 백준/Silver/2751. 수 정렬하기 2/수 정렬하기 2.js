let [n, ...numbers] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

numbers.sort((a, b) => a - b);

console.log(numbers.join('\n'));
