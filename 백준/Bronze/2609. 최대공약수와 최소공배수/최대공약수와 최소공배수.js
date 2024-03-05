let [a, b] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// 최대공약수
const getGCD = (a, b) => {
  if (b === 0) return a;
  return a > b ? getGCD(b, a % b) : getGCD(a, b % a);
};

// 최소공배수
let lcm = (a * b) / getGCD(a, b);

console.log(getGCD(a, b), lcm);
