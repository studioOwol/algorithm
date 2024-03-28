let [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let answer = [];

makeSequence(0, 1, N, M);

function makeSequence(index, start, n, m) {
  if (index === m) {
    console.log(answer.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {
    answer[index] = i;
    makeSequence(index + 1, i, n, m);
  }
}
