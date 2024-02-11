const fs = require('fs');

const [cases, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

for (let i = 0; i < cases; i++) {
  let map = {};
  let answer = 1;
  let length = inputs.shift();

  for (let j = 0; j < length; j++) {
    let [name, type] = inputs.shift();

    if (!map[type]) {
      map[type] = 0;
    }

    map[type] += 1;
  }

  for (let cnt of Object.values(map)) {
    answer *= cnt + 1;
  }

  console.log(answer - 1);
}
