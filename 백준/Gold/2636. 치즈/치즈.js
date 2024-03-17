let [t, ...plate] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [R, C] = t;
let visited = Array.from({ length: R }, () => Array(C).fill(false));
let ds = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let time = 0;
let remainings = [];
let initialCnt = 0;

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (plate[i][j] === 1) {
      visited[i][j] = true;
      initialCnt++;
    }
  }
}

const meltCheese = () => {
  let isMelted = false;

  while (!isMelted) {
    isMelted = true;

    visited = Array.from({ length: R }, () => Array(C).fill(false));
    let queue = [[0, 0]];

    while (queue.length) {
      let [r, c] = queue.shift();

      if (plate[r][c] === 1) {
        plate[r][c] = 0;
        isMelted = false;
        continue;
      }

      for (let d of ds) {
        let nr = r + d[0];
        let nc = c + d[1];

        if (!(0 <= nr && nr < R && 0 <= nc && nc < C)) {
          continue;
        }

        if (!visited[nr][nc]) {
          visited[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
    }
    
    if (!isMelted) {
      time++;
      remainings.push(plate.flat().filter((cell) => cell === 1).length);
    }
  }
};

meltCheese();

console.log(time);

if (remainings.length > 1) {
  console.log(remainings[remainings.length - 2]);
} else {
  console.log(initialCnt);
}
