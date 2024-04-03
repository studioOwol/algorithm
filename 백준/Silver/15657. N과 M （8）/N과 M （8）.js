let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [N, M] = input[0].split(' ').map(Number);
let nums = input[1].split(' ').map(Number);

let answer = [];
nums.sort((a, b) => a - b);

makeSequence(0, []);

console.log(answer.map((el) => el.join(' ')).join('\n'));

function makeSequence(start, result) {
  if (result.length === M) {
    answer.push([...result]);
    return;
  }

  for (let i = start; i < N; i++) {
    let newResult = [...result];
    newResult.push(nums[i]);
    makeSequence(i, newResult);
  }
}
