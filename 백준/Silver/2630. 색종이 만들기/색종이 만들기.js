let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let N = Number(t);
let paper = inputs.map((el) => el.split(' ').map(Number));
let cnt = [0, 0];

const recursion = (x, y, n) => {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += paper[y + j][x + i];
    }
  }

  if (total === 0) {
    cnt[0]++;
  } else if (total === n * n) {
    cnt[1]++;
  } else {
    n /= 2;
    recursion(x, y, n);
    recursion(x + n, y, n);
    recursion(x, y + n, n);
    recursion(x + n, y + n, n);
  }
};

recursion(0, 0, N);
console.log(cnt.join('\n'));
