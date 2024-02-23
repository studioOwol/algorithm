const [n, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index] < this.heap[Math.floor((index - 1) / 2)]
    ) {
      this.swap(index, Math.floor((index - 1) / 2));
      index = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let index = 0;

    while (index * 2 + 1 < this.heap.length) {
      let minChildIndex =
        index * 2 + 2 < this.heap.length &&
        this.heap[index * 2 + 2] < this.heap[index * 2 + 1]
          ? index * 2 + 2
          : index * 2 + 1;

      if (this.heap[index] < this.heap[minChildIndex]) {
        break;
      }

      this.swap(index, minChildIndex);
      index = minChildIndex;
    }

    return minValue;
  }
}

let minHeap = new MinHeap();
let answer = [];

for (let i = 0; i < n; i++) {
  if (inputs[i] === 0) {
    answer.push(minHeap.pop());
  } else {
    minHeap.push(inputs[i]);
  }
}

console.log(answer.join('\n'));
