let [n, ...numbers] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

class AbsHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);

    while (
      this.heap[parentIdx] &&
      (Math.abs(this.heap[idx]) < Math.abs(this.heap[parentIdx]) ||
        (Math.abs(this.heap[idx]) === Math.abs(this.heap[parentIdx]) &&
          this.heap[idx] < this.heap[parentIdx]))
    ) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 0) {
      return 0;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return minValue;
  }

  bubbleDown() {
    let idx = 0;
    let leftIdx = idx * 2 + 1;
    let rightIdx = idx * 2 + 2;

    while (
      (this.heap[leftIdx] &&
        (Math.abs(this.heap[leftIdx]) < Math.abs(this.heap[idx]) ||
          (Math.abs(this.heap[leftIdx]) === Math.abs(this.heap[idx]) &&
            this.heap[leftIdx] < this.heap[idx]))) ||
      (this.heap[rightIdx] &&
        (Math.abs(this.heap[rightIdx]) < Math.abs(this.heap[idx]) ||
          (Math.abs(this.heap[rightIdx]) === Math.abs(this.heap[idx]) &&
            this.heap[rightIdx] < this.heap[idx])))
    ) {
      let smallerIdx = leftIdx;

      if (
        this.heap[rightIdx] &&
        (Math.abs(this.heap[rightIdx]) < Math.abs(this.heap[smallerIdx]) ||
          (Math.abs(this.heap[rightIdx]) === Math.abs(this.heap[smallerIdx]) &&
            this.heap[rightIdx] < this.heap[smallerIdx]))
      ) {
        smallerIdx = rightIdx;
      }

      this.swap(idx, smallerIdx);
      idx = smallerIdx;
      leftIdx = idx * 2 + 1;
      rightIdx = idx * 2 + 2;
    }
  }
}

let absHeap = new AbsHeap();
let answer = [];

for (let i = 0; i < n; i++) {
  if (numbers[i] === 0) {
    answer.push(absHeap.pop());
  } else {
    absHeap.push(numbers[i]);
  }
}

console.log(answer.join('\n'));
