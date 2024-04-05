let [a, b, c] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

console.log(Number(recursion(a, b, c)));

function recursion(a, b, c) {
  if (b === BigInt(1)) {
    return a % c;
  }

  if (b % BigInt(2) === BigInt(0)) {
    return recursion(a, b / BigInt(2), c) ** BigInt(2) % c;
  } else {
    return (recursion(a, b / BigInt(2), c) ** BigInt(2) * a) % c;
  }
}
