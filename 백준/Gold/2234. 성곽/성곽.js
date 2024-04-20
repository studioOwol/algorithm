let [[N, M], ...walls] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let visited = Array.from({ length: M }, () => Array(N).fill(0));
let ds = [
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
];
let roomCnt = 0;
let sizes = [0];
let breakWallSize = 0;

for (let r = 0; r < M; r++) {
  for (let c = 0; c < N; c++) {
    if (!visited[r][c]) {
      roomCnt++;
      let size = 1;
      let queue = [[r, c]];
      visited[r][c] = roomCnt;

      while (queue.length) {
        let [cr, cc] = queue.shift();

        for (let i = 0; i < 4; i++) {
          let nr = cr + ds[i][0];
          let nc = cc + ds[i][1];

          if (!(0 <= nr && nr < M && 0 <= nc && nc < N)) {
            continue;
          }

          if (!visited[nr][nc] && !(walls[cr][cc] & (1 << i))) {
            queue.push([nr, nc]);
            visited[nr][nc] = roomCnt;
            size++;
          }
        }
      }

      sizes.push(size);
    }
  }
}

for (let r = 0; r < M; r++) {
  for (let c = 0; c < N; c++) {
    let roomId = visited[r][c];
    let wall = walls[r][c];

    for (let k = 0; k < 4; k++) {
      let nr = r + ds[k][0];
      let nc = c + ds[k][1];

      if (!(0 <= nr && nr < M && 0 <= nc && nc < N)) {
        continue;
      }

      if (visited[nr][nc] !== roomId && wall & (1 << k)) {
        let next = visited[nr][nc];
        let temp = sizes[roomId] + sizes[next];

        if (breakWallSize < temp) {
          breakWallSize = temp;
        }
      }
    }
  }
}

console.log(roomCnt);
console.log(Math.max(...sizes));
console.log(breakWallSize);
