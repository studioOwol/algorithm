let [t, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

for (let i = 0; i < t * 2; i += 2) {
  let [n, m] = inputs[i].split(' ').map(Number);
  let queue = inputs[i + 1]
    .split(' ')
    .map((priority, idx) => [Number(priority), idx]);
  let answer = 0;

  while (queue.length) {
    let maxPriority = Math.max(...queue.map((value) => value[0]));

    if (queue[0][0] < maxPriority) {
      queue.push(queue.shift());
    } else {
      answer++;
      if (m === queue.shift()[1]) {
        break;
      }
    }
  }

  console.log(answer);
}
