let [n, r, c] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const recursion = (n, r, c) => {
  if (n === 0) {
    return 0;
  }

  return (
    2 * (r % 2) +
    (c % 2) +
    4 * recursion(n - 1, Math.floor(r / 2), Math.floor(c / 2))
  );
};

console.log(recursion(n, r, c));
