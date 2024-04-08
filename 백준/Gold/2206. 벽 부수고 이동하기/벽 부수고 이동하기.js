let [t, ...input] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [N, M] = t.split(' ').map(Number);
let board = input.map((el) => el.split('').map(Number));
let visited = Array.from({ length: 2 }, () =>
  Array.from({ length: N }, () => Array(M).fill(0))
);
let ds = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let result = bfs();
console.log(result);

function bfs() {
  let queue = [[0, 0, 0]];
  visited[0][0][0] = 1;
  let idx = 0;

  while (queue.length !== idx) {
    let [r, c, wallCnt] = queue[idx];

    if (r === N - 1 && c === M - 1) {
      return visited[wallCnt][r][c];
    }

    for (let d of ds) {
      let nr = r + d[0];
      let nc = c + d[1];

      if (!(0 <= nr && nr < N && 0 <= nc && nc < M)) {
        continue;
      }

      if (board[nr][nc]) {
        if (wallCnt === 0 && !visited[1][nr][nc]) {
          visited[1][nr][nc] = visited[wallCnt][r][c] + 1;
          queue.push([nr, nc, 1]);
        }
      } else {
        if (visited[wallCnt][nr][nc]) continue;

        visited[wallCnt][nr][nc] = visited[wallCnt][r][c] + 1;
        queue.push([nr, nc, wallCnt]);
      }
    }
    idx++;
  }

  return -1;
}
