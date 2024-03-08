let n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

const factorial = (num) => {
  let zeroCnt = 0;

  for (let i = 5; i <= num; i *= 5) {
    zeroCnt += Math.floor(num / i);
  }

  return zeroCnt;
};

console.log(factorial(n));
