let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < inputs.length; i += 3) {
  let commands = inputs[i];
  let n = +inputs[i + 1];
  let nums = JSON.parse(inputs[i + 2]);
  let isReversed = false;
  let isError = false;
  let start = 0;
  let end = n - 1;
  let answer = [];

  for (let command of commands) {
    if (command === 'R') {
      isReversed = !isReversed;
    } else {
      if (start > end) {
        isError = true;
        break;
      }

      if (isReversed) {
        end--;
      } else {
        start++;
      }
    }
  }

  let arr = nums.slice(start, end + 1);

  if (isError) {
    answer.push('error');
  } else {
    if (isReversed) {
      answer.push(JSON.stringify(arr.reverse()));
    } else {
      answer.push(JSON.stringify(arr));
    }
  }

  console.log(answer.join('\n'));
}
