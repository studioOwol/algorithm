let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [N, M] = t.split(' ').map(Number);
let lab = inputs.map((el) => el.split(' ').map(Number));
let ds = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let result = 0;

dfs(0, 0, 0);
console.log(result);

function bfs(temp) {
  let safeZones = 0;
  let queue = [];

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (temp[r][c] === 2) {
        queue.push([r, c]);
      }
    }
  }

  while (queue.length) {
    let [r, c] = queue.shift();

    for (let d of ds) {
      let nr = r + d[0];
      let nc = c + d[1];

      if (!(0 <= nr && nr < N && 0 <= nc && nc < M)) {
        continue;
      }

      if (temp[nr][nc] === 0) {
        temp[nr][nc] = 2;
        queue.push([nr, nc]);
      }
    }
  }

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (temp[r][c] === 0) {
        safeZones++;
      }
    }
  }

  return safeZones;
}

function dfs(cnt, r, c) {
  if (cnt === 3) {
    let temp = lab.map((row) => [...row]);
    let tempResult = bfs(temp);
    result = Math.max(result, tempResult);
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = i === r ? c : 0; j < M; j++) {
      if (lab[i][j] === 0) {
        lab[i][j] = 1;
        dfs(cnt + 1, i, j);
        lab[i][j] = 0;
      }
    }
  }
}
