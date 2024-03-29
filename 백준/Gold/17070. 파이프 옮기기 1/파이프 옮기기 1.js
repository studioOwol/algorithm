let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = +t;
let board = inputs.map((el) => el.split(' ').map(Number));
let visited = Array.from({ length: N }, () => Array(N).fill(false));
let pipe = { r: 0, c: 1, d: 0 };
// 이동방법
let ds = [
  // 가로
  [
    [0, 1],
    [0, 0],
    [1, 1],
  ],
  // 세로
  [
    [0, 0],
    [1, 0],
    [1, 1],
  ],
  // 대각선
  [
    [0, 1],
    [1, 0],
    [1, 1],
  ],
];
let count = 0;

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    if (board[r][c] === 1) {
      visited[r][c] = true;
    }
  }
}

dfs(0, 1);
console.log(count);

function dfs(r, c) {
  visited[r][c] = true;

  if (r === N - 1 && c === N - 1) {
    count++;
    return;
  }

  let moveWays = ds[pipe.d];

  for (let idx = 0; idx < moveWays.length; idx++) {
    let [i, j] = moveWays[idx];

    let nr = r + i;
    let nc = c + j;

    if (!(0 <= nr && nr < N && 0 <= nc && nc < N)) {
      continue;
    }

    if (idx === 2) {
      if (visited[nr][nc - 1] || visited[nr - 1][nc]) {
        continue;
      }
    }

    if (!visited[nr][nc]) {
      visited[nr][nc] = true;
      pipe.d = idx;
      dfs(nr, nc);
      visited[nr][nc] = false;
    }
  }
}
