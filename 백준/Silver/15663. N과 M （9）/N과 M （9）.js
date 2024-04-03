let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [N, M] = input[0].split(' ').map(Number);
let nums = input[1].split(' ').map(Number);
let visited = new Array(N).fill(false);

let answer = [];
nums.sort((a, b) => a - b);

makeSequence([]);
console.log([...new Set(answer.map((el) => el.join(' ')))].join('\n'));

function makeSequence(result) {
  if (result.length === M) {
    answer.push([...result]);
  } else {
    visited.forEach((flag, idx) => {
      if (!flag) {
        visited[idx] = true;
        result.push(nums[idx]);
        makeSequence(result);
        visited[idx] = false;
        result.pop();
      }
    });
  }
}
