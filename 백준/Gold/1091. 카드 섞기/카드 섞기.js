let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(inputs[0]);
const P = inputs[1].split(' ').map(Number);
const S = inputs[2].split(' ').map(Number);

let cards = Array.from({ length: N }, (_, i) => i);
let count = 0;

while (true) {
  const isDone = cards.every((card, i) => card % 3 === P[i]);

  if (isDone) {
    console.log(count);
    break;
  }

  const nextCards = new Array(N);

  for (let i = 0; i < N; i++) {
    nextCards[i] = cards[S[i]];
  }

  cards = nextCards;
  count++;

  if (cards.every((v, i) => v === i)) {
    console.log(-1);
    break;
  }
}
