let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = input[0].split(' ').map(Number);
let numbers = input[1].split(' ').map(Number);
let max = 0;

const recurstion = (arr, size, start, combi) => {
  if (combi.length === size) {
    let sum = combi.reduce((acc, num) => acc + num, 0);

    if (max < sum && sum <= m) {
      max = sum;
    }
    return;
  }

  for (let i = start; i < arr.length; i++) {
    combi.push(arr[i]);
    recurstion(arr, size, i + 1, combi);
    combi.pop();
  }
};

recurstion(numbers, 3, 0, []);

console.log(max);