let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let n = parseInt(input[0]);

const round = (n) => {
  if (n - Math.floor(n) >= 0.5) {
    return Math.floor(n) + 1;
  } else {
    return Math.floor(n);
  }
};

if (n !== 0) {
  let opinion = input.slice(1).map(Number);
  opinion.sort((a, b) => a - b);
  let excluded = round(n * 0.15);
  let newArr = opinion.slice(excluded, n - excluded);
  console.log(
    round(newArr.reduce((acc, value) => acc + value, 0) / newArr.length)
  );
} else {
  console.log(0);
}
