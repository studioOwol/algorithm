let games = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(''));

let goal = [12, 17, 21];
let limit = goal[2];
let total = 0;
let answer = 'WIN';
let turn = 0;

for (let i = 0; i < games.length; i++) {
  if (turn === 10) break;

  let game = games[i];
  let goCnt = game.filter((v) => v === '0').length;

  if (goCnt === 0) {
    goCnt = 5;
  }

  if (goCnt < 4) {
    turn++;
  }
  total += goCnt;

  if (total === 5 && limit === goal[2]) {
    limit = goal[1];
  }

  if (total === 8 && limit === goal[1]) {
    limit = goal[0];
  }

  if (total === 10 && limit === goal[2]) {
    limit = goal[1];
  }

  if (total >= limit) {
    break;
  }
}

if (total < limit) {
  answer = 'LOSE';
}

console.log(answer);
