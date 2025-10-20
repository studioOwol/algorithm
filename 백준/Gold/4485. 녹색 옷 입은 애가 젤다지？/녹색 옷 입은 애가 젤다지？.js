let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

let idx = 0;
let caseNum = 1;

const ds = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];

while (true) {
  const N = input[idx][0];

  if (N === 0) break;
  idx++;

  const cave = input.slice(idx, idx + N);
  idx += N;

  const dist = Array.from({ length: N }, () => Array(N).fill(Infinity));
  dist[0][0] = cave[0][0];

  const pq = [[0, 0, cave[0][0]]];

  while (pq.length) {
    pq.sort((a, b) => a[2] - b[2]);

    const [r, c, cost] = pq.shift();

    if (cost > dist[r][c]) continue;

    for (let d of ds) {
      const [nr, nc] = [r + d[0], c + d[1]];

      if (!(0 <= nr && nr < N && 0 <= nc && nc < N)) continue;

      const newCost = cost + cave[nr][nc];

      if (newCost < dist[nr][nc]) {
        dist[nr][nc] = newCost;
        pq.push([nr, nc, newCost]);
      }
    }
  }

  console.log(`Problem ${caseNum}: ${dist[N - 1][N - 1]}`);
  caseNum++;
}
