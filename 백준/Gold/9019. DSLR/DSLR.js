let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let answer = [];

const bfs = (a, b) => {
  let visited = Array(10000).fill(false);
  let queue = [[a, '']];
  visited[a] = true;

  while (queue.length) {
    let [cur, commands] = queue.shift();

    if (cur === b) {
      answer.push(commands);
      return;
    }

    let newD = (2 * cur) % 10000;
    let newS = cur === 0 ? 9999 : cur - 1;
    let newL = (cur % 1000) * 10 + Math.floor(cur / 1000);
    let newR = (cur % 10) * 1000 + Math.floor(cur / 10);

    if (!visited[newD]) {
      visited[newD] = true;
      queue.push([newD, commands + 'D']);
    }

    if (!visited[newS]) {
      visited[newS] = true;
      queue.push([newS, commands + 'S']);
    }

    if (!visited[newL]) {
      visited[newL] = true;
      queue.push([newL, commands + 'L']);
    }

    if (!visited[newR]) {
      visited[newR] = true;
      queue.push([newR, commands + 'R']);
    }
  }
};

inputs.forEach((input) => {
  let [a, b] = input.split(' ').map(Number);
  bfs(a, b);
});

console.log(answer.join('\n'));
