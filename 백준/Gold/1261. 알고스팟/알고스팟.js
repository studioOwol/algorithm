let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [M, N] = inputs.shift().split(' ').map(Number);
let board = inputs.map((row) => row.split('').map(Number));
let visited = Array.from({ length: N }, () => new Array(M).fill(false));
let ds = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];

console.log(bfs());

function bfs() {
  let queue = [[0, 0, 0]];
  visited[0][0] = true;

  while (queue.length) {
    let [r, c, cnt] = queue.shift();

    if (r === N - 1 && c === M - 1) {
      return cnt;
    }

    for (let d of ds) {
      let [nr, nc] = [r + d[0], c + d[1]];

      if (!(0 <= nr && nr < N && 0 <= nc && nc < M)) continue;

      if (!visited[nr][nc]) {
        visited[nr][nc] = true;

        if (board[nr][nc]) {
          queue.push([nr, nc, cnt + 1]);
        } else {
          queue.unshift([nr, nc, cnt]);
        }
      }
    }
  }
}
