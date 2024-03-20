let [n, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(n);
let curves = inputs.map((el) => el.split(' ').map(Number));
let cnt = 0;
let ds = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];
let map = Array.from({ length: 101 }, () => Array(101).fill(false));

curves.forEach((v) => {
  let [x, y, d, g] = v;
  map[y][x] = true;

  let [curX, curY, curD, curG] = [x, y, d, 0];
  let prev = [[x, y]];

  while (curG <= g) {
    if (curG === 0) {
      curX += ds[curD][0];
      curY += ds[curD][1];
      prev.push([curX, curY]);
      map[curY][curX] = true;
    } else {
      let L = prev.length - 1;

      for (let i = L - 1; i >= 0; i--) {
        let [prevX, prevY] = prev[i];
        let newX = -(prevY - curY) + curX;
        let newY = prevX - curX + curY;
        map[newY][newX] = true;
        prev.push([newX, newY]);
      }

      curX = prev[prev.length - 1][0];
      curY = prev[prev.length - 1][1];
    }

    curG++;
    curD = (curD + 1) % 4;
  }
});

for (let r = 0; r < 100; r++) {
  for (let c = 0; c < 100; c++) {
    if (map[r][c] && map[r + 1][c] && map[r][c + 1] && map[r + 1][c + 1]) {
      cnt++;
    }
  }
}

console.log(cnt);
