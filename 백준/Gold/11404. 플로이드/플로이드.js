let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let n = Number(inputs[0]);
let m = Number(inputs[1]);
let linkedInfo = inputs.slice(2).map((el) => el.split(' ').map(Number));
let graph = Array.from({ length: n }, () => Array(n).fill(Infinity));

linkedInfo.forEach(([a, b, c]) => {
  graph[a - 1][b - 1] = Math.min(graph[a - 1][b - 1], c);
});

for (let i = 0; i < n; i++) {
  graph[i][i] = 0;
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

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === Infinity) {
      graph[i][j] = 0;
    }
  }
}

console.log(graph.map((el) => el.join(' ')).join('\n'));
