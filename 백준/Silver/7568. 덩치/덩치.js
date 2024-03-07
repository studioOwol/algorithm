let [n, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let people = inputs.map((el) => el.split(' ').map(Number));
let rank = [];

for (let i = 0; i < n; i++) {
  let cnt = 0;

  for (let j = 0; j < n; j++) {
    if (i !== j) {
      if (people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
        cnt++;
      }
    }
  }
  rank.push(cnt + 1);
}

console.log(rank.join(' '));
