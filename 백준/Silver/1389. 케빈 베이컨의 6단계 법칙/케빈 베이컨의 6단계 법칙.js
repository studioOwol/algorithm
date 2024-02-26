let [t, ...relations] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n, m] = t;
let INF = Infinity;
let graph = Array.from({ length: n }, () => Array(n).fill(INF));

for (let i = 0; i < m; i++) {
  let [start, end] = relations[i];

  graph[start - 1][start - 1] = 0;
  graph[end - 1][end - 1] = 0;
  graph[start - 1][end - 1] = 1;
  graph[end - 1][start - 1] = 1;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (graph[j][k] > graph[j][i] + graph[i][k]) {
        graph[j][k] = graph[j][i] + graph[i][k];
      }
    }
  }
}

let sumArr = graph.map((arr) => arr.reduce((acc, cnt) => acc + cnt, 0));
let index = sumArr.indexOf(Math.min(...sumArr));

console.log(index + 1);
