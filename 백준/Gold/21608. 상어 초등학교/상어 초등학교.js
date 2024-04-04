let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = +input.shift();
let room = Array.from({ length: N }, () => Array(N).fill(0));
let ds = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let students = input.map((el) => el.split(' ').map(Number));

students.forEach((v) => {
  let [num, ...likes] = v;
  let seats = [];

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (room[r][c] === 0) {
        let like = 0;
        let empty = 0;

        for (let d of ds) {
          nr = r + d[0];
          nc = c + d[1];

          if (!(0 <= nr && nr < N && 0 <= nc && nc < N)) {
            continue;
          }

          if (likes.includes(room[nr][nc])) {
            like++;
          }

          if (room[nr][nc] === 0) {
            empty++;
          }
        }

        seats.push([like, empty, r, c]);
      }
    }
  }

  seats.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];

    if (a[1] !== b[1]) return b[1] - a[1];

    if (a[2] !== b[2]) return a[2] - b[2];

    return a[3] - b[3];
  });

  room[seats[0][2]][seats[0][3]] = num;
});

let happy = 0;
students.sort((a, b) => a[0] - b[0]);

for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    let like = 0;
    let num = room[r][c];

    for (let d of ds) {
      nr = r + d[0];
      nc = c + d[1];

      if (!(0 <= nr && nr < N && 0 <= nc && nc < N)) {
        continue;
      }

      if (students[num - 1].slice(1).includes(room[nr][nc])) {
        like++;
      }
    }

    if (like !== 0) {
      happy += 10 ** (like - 1);
    }
  }
}

console.log(happy);
