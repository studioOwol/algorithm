let [t, ...countries] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [N, L, R] = t;
let visited;
let ds = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
let day = 0;
let totalPeople;
let borderCnt;

for (let t = 0; t < 2000; t++) {
  let isMoved = false;
  visited = Array.from({ length: N }, () => Array(N).fill(0));

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (visited[r][c] === 0) {
        totalPeople = 0;
        borderCnt = 0;
        dfs(r, c);

        if (borderCnt > 1) {
          move(Math.floor(totalPeople / borderCnt));
          isMoved = true;
        }

        if (borderCnt === 1) {
          visited[r][c] = 2;
        }
      }
    }
  }

  if (isMoved) {
    day++;
  } else {
    break;
  }
}

console.log(day);

function move(people) {
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (visited[r][c] === 1) {
        visited[r][c] = 2;
        countries[r][c] = people;
      }
    }
  }
}

function dfs(r, c) {
  visited[r][c] = 1;
  borderCnt++;
  totalPeople += countries[r][c];

  for (let d of ds) {
    let nr = r + d[0];
    let nc = c + d[1];

    if (!(0 <= nr && nr < N && 0 <= nc && nc < N)) {
      continue;
    }

    if (!visited[nr][nc]) {
      let diff = Math.abs(countries[r][c] - countries[nr][nc]);
      if (L <= diff && diff <= R) {
        dfs(nr, nc);
      }
    }
  }
}
