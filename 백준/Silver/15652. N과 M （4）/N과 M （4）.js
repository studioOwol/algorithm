let [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let answer = [];
let result = [];

makeSequence(0, 1, N, M);

console.log(answer.join('\n'));

function makeSequence(index, start, n, m) {
  if (index === m) {
    answer.push(result.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {
    result[index] = i;
    makeSequence(index + 1, i, n, m);
  }
}
