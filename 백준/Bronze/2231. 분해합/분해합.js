let n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let m = 0;

for (let i = 0; i < n; i++) {
  let sum = 0;
  // 후보값
  let candidate = String(i);

  for (let j = 0; j < candidate.length; j++) {
    // 각 자릿수 더하기
    sum += Number(candidate[j]);
  }

  // 후보값 더하기
  sum += Number(candidate);

  if (sum === n) {
    m = candidate;
    break;
  }
}

console.log(m);
