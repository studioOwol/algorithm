let [info, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

const [N, d, k, c] = info.split(' ').map(Number);
const sushis = inputs.map(Number);
let counts = new Array(d + 1).fill(0);
let typeCnt = 0;
let maxCnt = 0;

for (let i = 0; i < k; i++) {
  if (counts[sushis[i]] === 0) typeCnt++;

  counts[sushis[i]]++;
}

for (let i = 0; i < N; i++) {
  const totalCnt = typeCnt + (counts[c] === 0 ? 1 : 0);

  maxCnt = Math.max(maxCnt, totalCnt);

  const leftSushi = sushis[i];
  counts[leftSushi]--;
  if (counts[leftSushi] === 0) typeCnt--;

  const rightSushi = sushis[(i + k) % N];
  if (counts[rightSushi] === 0) typeCnt++;
  counts[rightSushi]++;
}

console.log(maxCnt);
