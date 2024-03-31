let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n, m, r] = inputs[0];
let items = inputs[1];
let linkedInfo = inputs.slice(2);
let graph = Array.from({ length: n }, () => Array(n).fill(Infinity));

linkedInfo.forEach((v) => {
  let [start, end, l] = v;

  graph[start - 1][end - 1] = l;
  graph[end - 1][start - 1] = l;
});

for (let i = 0; i < n; i++) {
  graph[i][i] = 0;
}

// 거쳐가는 점
for (let i = 0; i < n; i++) {
  // 시작 점
  for (let j = 0; j < n; j++) {
    // 끝 점
    for (let k = 0; k < n; k++) {
      if (graph[j][i] + graph[i][k] < graph[j][k]) {
        if (graph[j][i] + graph[i][k] <= m) {
          graph[j][k] = graph[j][i] + graph[i][k];
        }
      }
    }
  }
}

let max = 0;

for (let i = 0; i < n; i++) {
  let sum = 0;
  graph[i].forEach((v, idx) => {
    if (0 <= v && v <= m) {
      sum += items[idx];
    }
  });

  max = Math.max(max, sum);
}

console.log(max);
