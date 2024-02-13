const fs = require('fs');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let [n, k] = input;
let visited = Array(100001).fill(false);
let queue = [[n, 0]];

const bfs = () => {
  while (queue.length) {
    let [n, cnt] = queue.shift();

    if (n === k) {
      return cnt;
    }

    if (0 <= n + 1 && n + 1 <= 100000) {
      if (!visited[n + 1]) {
        visited[n + 1] = true;
        queue.push([n + 1, cnt + 1]);
      }
    }

    if (0 <= n - 1 && n - 1 <= 100000) {
      if (!visited[n - 1]) {
        visited[n - 1] = true;
        queue.push([n - 1, cnt + 1]);
      }
    }

    if (0 <= n * 2 && n * 2 <= 100000) {
      if (!visited[n * 2]) {
        visited[n * 2] = true;
        queue.push([n * 2, cnt + 1]);
      }
    }
  }
};

console.log(bfs());
