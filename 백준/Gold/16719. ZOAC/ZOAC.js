let string = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let visited = new Array(string.length).fill(false);

function recursion(left, right) {
  if (left > right) return;

  let minPos = left;

  for (let i = left; i <= right; i++) {
    if (string[i] < string[minPos]) {
      minPos = i;
    }
  }

  visited[minPos] = true;

  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (visited[i]) {
      result += string[i];
    }
  }

  console.log(result);

  recursion(minPos + 1, right);
  recursion(left, minPos - 1);
}

recursion(0, string.length - 1);
