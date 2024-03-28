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

makeWall(0);
console.log(result);

function bfs() {
  let queue = [];
  let temp = lab.map((row) => row.slice());

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

  let cnt = 0;

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (temp[r][c] === 0) {
        cnt++;
      }
    }
  }

  result = Math.max(result, cnt);
}

function makeWall(cnt) {
  if (cnt === 3) {
    bfs();
    return;
  }

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (lab[r][c] === 0) {
        lab[r][c] = 1;
        makeWall(cnt + 1);
        lab[r][c] = 0;
      }
    }
  }
}
