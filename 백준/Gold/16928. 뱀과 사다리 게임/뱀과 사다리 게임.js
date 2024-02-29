let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

let [n, m] = t;
let board = Array(101)
  .fill(0)
  .map((_, idx) => idx);
let visited = Array(101).fill(-1);

for (let i = 0; i < inputs.length; i++) {
  let [start, end] = inputs[i];
  board[start] = end;
}

const bfs = () => {
  let queue = [1];
  visited[1] = 0;

  while (queue.length) {
    let current = queue.shift();

    for (let dice = 1; dice <= 6; dice++) {
      let next = current + dice;

      if (next > 100) {
        continue;
      }

      next = board[next];

      if (visited[next] === -1) {
        visited[next] = visited[current] + 1;
        queue.push(next);
      }
    }
  }
};

bfs();

console.log(visited[100]);
