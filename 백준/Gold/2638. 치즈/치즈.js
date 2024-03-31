let [t, ...board] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [N, M] = t;
let ds = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let cheeseCnt = 0;
let time = 0;
let visited;
let airCnt;

for (let r = 0; r < N; r++) {
  for (let c = 0; c < M; c++) {
    if (board[r][c] === 1) {
      cheeseCnt++;
    }
  }
}

while (cheeseCnt > 0) {
  airCnt = Array.from({ length: N }, () => Array(M).fill(0));
  visited = Array.from({ length: N }, () => Array(M).fill(false));

  bfs();
  time++;
}

console.log(time);

function bfs() {
  let queue = [[0, 0]];
  visited[0][0] = true;

  while (queue.length) {
    let [r, c] = queue.shift();

    for (let d of ds) {
      let nr = r + d[0];
      let nc = c + d[1];

      if (!(0 <= nr && nr < N && 0 <= nc && nc < M)) {
        continue;
      }

      if (!visited[nr][nc]) {
        if (board[nr][nc] === 1) {
          if (airCnt[nr][nc] >= 1) {
            board[nr][nc] = 0;
            visited[nr][nc] = true;
            cheeseCnt--;
          } else {
            airCnt[nr][nc]++;
          }
        } else {
          visited[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
    }
  }
}
