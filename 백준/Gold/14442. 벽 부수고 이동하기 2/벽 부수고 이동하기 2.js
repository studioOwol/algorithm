let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  push(item) {
    const newNode = new Node(item);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  shift() {
    if (!this.front) {
      return null;
    }
    const removedItem = this.front.data;
    if (this.front === this.rear) {
      this.rear = null;
    }
    this.front = this.front.next;
    this.size--;
    return removedItem;
  }

  peek() {
    return this.front ? this.front.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

let [N, M, K] = inputs.shift().split(' ').map(Number);
let board = inputs.map((row) => row.split('').map(Number));
let dist = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(K + 1).fill(0))
);
let ds = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];

console.log(bfs());

function bfs() {
  let queue = new Queue();
  queue.push([0, 0, 0]);
  dist[0][0][0] = 1;

  while (!queue.isEmpty()) {
    let [r, c, cnt] = queue.shift();

    if (r === N - 1 && c === M - 1) {
      return dist[r][c][cnt];
    }

    for (d of ds) {
      let [nr, nc] = [r + d[0], c + d[1]];

      if (!(0 <= nr && nr < N && 0 <= nc && nc < M)) continue;

      if (board[nr][nc]) {
        if (cnt < K && !dist[nr][nc][cnt + 1]) {
          dist[nr][nc][cnt + 1] = dist[r][c][cnt] + 1;
          queue.push([nr, nc, cnt + 1]);
        }
      } else {
        if (dist[nr][nc][cnt]) continue;

        dist[nr][nc][cnt] = dist[r][c][cnt] + 1;
        queue.push([nr, nc, cnt]);
      }
    }
  }

  return -1;
}
