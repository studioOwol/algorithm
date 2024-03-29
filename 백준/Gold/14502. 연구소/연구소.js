let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [N, M] = t.split(' ').map(Number);
let laboratory = inputs.map((el) => el.split(' ').map(Number));
let virus = [];
let empty = [];
let walls = [];
let result, cnt, lab;

for (let r = 0; r < N; r++) {
  for (let c = 0; c < M; c++) {
    if (laboratory[r][c] === 2) {
      virus.push([r, c]);
    }

    if (laboratory[r][c] === 0) {
      empty.push([r, c]);
    }
  }
}

getMinCase();
console.log(result);

function getMinCase() {
  if (walls.length === 3) {
    lab = copyLab();

    walls.forEach((wall) => {
      let [r, c] = empty[wall];
      lab[r][c] = 1;
    });

    let emptyCnt = getEmptyCnt();
    if (!result || result < emptyCnt) {
      result = emptyCnt;
    }

    return;
  }

  for (let i = 0; i < empty.length; i++) {
    let length = walls.length;
    if (!walls.includes(i) && (length === 0 || walls[length - 1] < i)) {
      walls.push(i);
      getMinCase();
      walls.pop();
    }
  }
}

function getEmptyCnt() {
  cnt = 0;

  virus.forEach((place) => {
    updateNearPlace(...place);
  });

  return empty.length - cnt - 3;
}

function spreadVirus(r, c) {
  if (!(0 <= r && r < N && 0 <= c && c < M)) {
    return;
  }

  if (lab[r][c] === 0) {
    lab[r][c] = 2;
    cnt++;
    updateNearPlace(r, c);
  }
}

function updateNearPlace(r, c) {
  spreadVirus(r + 1, c);
  spreadVirus(r - 1, c);
  spreadVirus(r, c + 1);
  spreadVirus(r, c - 1);
}

function copyLab() {
  let temp = [];

  laboratory.forEach((row) => {
    temp.push([...row]);
  });

  return temp;
}
