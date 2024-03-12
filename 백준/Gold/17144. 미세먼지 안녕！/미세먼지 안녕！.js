let [n, ...room] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [R, C, T] = n;
let ds = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let cleanerPosition = [];

const spreadDusts = () => {
  let spreadRoom = room.map((row) => [...row]);

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (room[r][c] > 0) {
        let spreadAmount = Math.floor(room[r][c] / 5);
        let cnt = 0;

        for (let d of ds) {
          let nr = r + d[0];
          let nc = c + d[1];

          if (!(0 <= nr && nr < R && 0 <= nc && nc < C)) continue;
          if (spreadRoom[nr][nc] === -1) continue;

          spreadRoom[nr][nc] += spreadAmount;
          cnt++;
        }

        spreadRoom[r][c] -= spreadAmount * cnt;
      }

      if (room[r][c] === -1) {
        cleanerPosition.push(r);
      }
    }
  }

  room = spreadRoom;
};

const cleanAir = () => {
  let [upR, downR] = cleanerPosition;

  for (let i = upR - 1; i > 0; i--) {
    room[i][0] = room[i - 1][0];
  }

  for (let j = 0; j < C - 1; j++) {
    room[0][j] = room[0][j + 1];
  }

  for (let i = 0; i < upR; i++) {
    room[i][C - 1] = room[i + 1][C - 1];
  }

  for (let j = C - 1; j > 1; j--) {
    room[upR][j] = room[upR][j - 1];
  }

  room[upR][1] = 0;

  for (let i = downR + 1; i < R - 1; i++) {
    room[i][0] = room[i + 1][0];
  }

  for (let j = 0; j < C - 1; j++) {
    room[R - 1][j] = room[R - 1][j + 1];
  }

  for (let i = R - 1; i > downR; i--) {
    room[i][C - 1] = room[i - 1][C - 1];
  }

  for (let j = C - 1; j > 1; j--) {
    room[downR][j] = room[downR][j - 1];
  }

  room[downR][1] = 0;
};

for (let t = 0; t < T; t++) {
  spreadDusts();
  cleanAir();
}

let total = room.flat().reduce((acc, val) => acc + val, 0);

console.log(total + 2);
