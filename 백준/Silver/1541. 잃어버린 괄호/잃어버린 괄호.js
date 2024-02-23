const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let arr = input.split('-');
let tmp = arr[0].split('+');
let plus = 0;
let minus = 0;

for (let i = 0; i < tmp.length; i++) {
  plus += Number(tmp[i]);
}

for (let i = 1; i < arr.length; i++) {
  arr[i].split('+').forEach((num) => {
    minus -= Number(num);
  });
}

console.log(plus + minus);
