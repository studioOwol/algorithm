let n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

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

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.front) {
      return -1;
    }

    let removedValue = this.front.data;
    if (this.front === this.rear) {
      this.rear = null;
    }

    this.front = this.front.next;
    this.size--;

    return removedValue;
  }

  getFront() {
    return this.front ? this.front.data : -1;
  }

  getBack() {
    return this.rear ? this.rear.data : -1;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  getSize() {
    return this.size;
  }
}

let queue = new Queue();

for (let i = 1; i <= n; i++) {
  queue.enqueue(i);
}

while (queue.getSize() > 1) {
  queue.dequeue();
  queue.enqueue(queue.dequeue());
}

console.log(queue.dequeue());
