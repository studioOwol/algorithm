const fs = require('fs');

const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const cnt = input[0];
const scores = input[1];

const max = Math.max(...scores);
const newScores = scores.map((num) => (num / max) * 100);
const sum = newScores.reduce((acc, num) => acc + num, 0);

console.log(sum / cnt);
