let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let nums = inputs.slice(0, inputs.length - 1).map((el) => el.split(''));
let answer = [];

for (let i = 0; i < nums.length; i++) {
  let newStr = nums[i].reverse().join('');

  if (newStr === inputs[i]) {
    answer.push('yes');
  } else {
    answer.push('no');
  }
}

console.log(answer.join('\n'));
