let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let n = +t;
let space = inputs.map((el) => el.split(' ').map(Number));
let ds = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
// queue = 상어의 위치
let queue = [];
let shark = { r: -1, c: -1, size: 2, eaten: 0 };
let totalTime = 0;

for (let r = 0; r < n; r++) {
  for (let c = 0; c < n; c++) {
    if (space[r][c] === 9) {
      shark.r = r;
      shark.c = c;
      space[r][c] = 0;
    }
  }
}

const bfs = () => {
  let visited = Array.from({ length: n }, () => Array(n).fill(false));
  let minDist = Infinity;
  let minR = Infinity;
  let minC = Infinity;

  queue.push({ r: shark.r, c: shark.c, dist: 0 });
  visited[shark.r][shark.c] = true;

  while (queue.length) {
    let { r, c, dist } = queue.shift();

    if (0 < space[r][c] && space[r][c] < shark.size) {
      if (dist < minDist) {
        minDist = dist;
        minR = r;
        minC = c;
      }
      if (dist === minDist) {
        if (r < minR) {
          minR = r;
          minC = c;
        }
        if (r === minR) {
          if (c < minC) {
            minR = r;
            minC = c;
          }
        }
      }
    }

    for (let d of ds) {
      let nc = c + d[0];
      let nr = r + d[1];

      if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
      if (visited[nr][nc] || space[nr][nc] > shark.size) continue;

      queue.push({ r: nr, c: nc, dist: dist + 1 });
      visited[nr][nc] = true;
    }
  }

  return [minR, minC, minDist];
};

for (let i = 0; i < n * n; i++) {
  let [minR, minC, minDist] = bfs();

  if (minR === Infinity && minC === Infinity && minDist === Infinity) {
    break;
  }

  shark.r = minR;
  shark.c = minC;
  shark.eaten++;
  totalTime += minDist;

  if (shark.eaten === shark.size) {
    shark.size++;
    shark.eaten = 0;
  }

  space[minR][minC] = 0;
}

console.log(totalTime);
