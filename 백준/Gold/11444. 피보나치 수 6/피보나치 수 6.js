let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let n = BigInt(input);
let MOD = BigInt(1000000007);

console.log(fibonacci(n).toString());

function fibonacci(n) {
  if (n <= 1) {
    return BigInt(n);
  }

  let A = [
    [BigInt(1), BigInt(1)],
    [BigInt(1), BigInt(0)],
  ];
  let result = powerMatrix(A, BigInt(n) - BigInt(1));
  return result[0][0] % MOD;
}

function powerMatrix(A, n) {
  if (n === BigInt(1)) {
    return A;
  }

  if (n % BigInt(2) === BigInt(0)) {
    let half = powerMatrix(A, n / BigInt(2));
    return multiplyMatrix(half, half);
  } else {
    let half = powerMatrix(A, (n - BigInt(1)) / BigInt(2));
    return multiplyMatrix(multiplyMatrix(half, half), A);
  }
}

function multiplyMatrix(A, B) {
  let result = [
    [BigInt(0), BigInt(0)],
    [BigInt(0), BigInt(0)],
  ];

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        result[i][j] = (result[i][j] + A[i][k] * B[k][j]) % MOD;
      }
    }
  }

  return result;
}
