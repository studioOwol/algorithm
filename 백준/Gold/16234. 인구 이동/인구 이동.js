let [t, ...countries] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [N, L, R] = t;
let ds = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let day = 0;
let visited;

while (true) {
  visited = Array.from({ length: N }, () => Array(N).fill(false));
  let isMoved = false;

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (!visited[r][c]) {
        let union = checkBorder(r, c);
        if (union.length > 1) {
          move(union);
          isMoved = true;
        }
      }
    }
  }

  if (!isMoved) break;
  day++;
}

console.log(day);

function move(union) {
  let totalPopulation = 0;

  for (let [r, c] of union) {
    totalPopulation += countries[r][c];
  }

  let avgPopulation = Math.floor(totalPopulation / union.length);

  for (let [r, c] of union) {
    countries[r][c] = avgPopulation;
  }
}

function checkBorder(r, c) {
  let queue = [[r, c]];
  let union = [];

  while (queue.length) {
    let [r, c] = queue.shift();
    if (visited[r][c]) continue;

    visited[r][c] = true;
    union.push([r, c]);

    for (let d of ds) {
      let nr = r + d[0];
      let nc = c + d[1];

      if (!(0 <= nr && nr < N && 0 <= nc && nc < N)) {
        continue;
      }

      let diff = Math.abs(countries[r][c] - countries[nr][nc]);

      if (L <= diff && diff <= R) {
        queue.push([nr, nc]);
      }
    }
  }

  return union;
}
