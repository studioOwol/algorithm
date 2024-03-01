let [t, ...numbers] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n, m] = t;
let tetrominos = [
  // 일자
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  // 네모
  [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 0],
  ],
  // ㄱ
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [2, 1],
  ],
  // ㄹ
  [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ],
  // ㅗ
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 1],
  ],
];
let rotations = [
  [1, 1],
  [-1, 1],
  [-1, -1],
  [1, -1],
];
let max = 0;

const solve = (r, c, tetromino) => {
  for (let i = 0; i < rotations.length; i++) {
    let cnt1 = 0;
    let cnt2 = 0;

    for (let j = 0; j < tetromino.length; j++) {
      let nr = r + tetromino[j][0] * rotations[i][0];
      let nc = c + tetromino[j][1] * rotations[i][1];

      if (0 <= nc && nc < m && 0 <= nr && nr < n) {
        cnt1 += numbers[nr][nc];
      }

      nr = r + tetromino[j][1] * rotations[i][0];
      nc = c + tetromino[j][0] * rotations[i][1];

      if (0 <= nc && nc < m && 0 <= nr && nr < n) {
        cnt2 += numbers[nr][nc];
      }
    }
    max = Math.max(max, cnt1);
    max = Math.max(max, cnt2);
  }
};

for (let tetromino of tetrominos) {
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      solve(r, c, tetromino);
    }
  }
}

console.log(max);
