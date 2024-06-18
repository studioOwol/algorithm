let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let lastValue = 0;
let valueIdx = 0;

for (let i = 0; i < inputs.length; i++) {
  if (
    inputs[i] !== 'Fizz' &&
    inputs[i] !== 'Buzz' &&
    inputs[i] !== 'FizzBuzz'
  ) {
    lastValue = Number(inputs[i]);
    valueIdx = i;
  }
}

if (valueIdx === 0) {
  lastValue += 3;
} else if (valueIdx === 1) {
  lastValue += 2;
} else if (valueIdx === 2) {
  lastValue += 1;
}

if (lastValue % 3 === 0 && lastValue % 5 === 0) {
  console.log('FizzBuzz');
} else if (lastValue % 3 === 0) {
  console.log('Fizz');
} else if (lastValue % 5 === 0) {
  console.log('Buzz');
} else {
  console.log(lastValue);
}
