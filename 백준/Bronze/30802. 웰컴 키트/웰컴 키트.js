let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

// 키트: 티 1장 & 펜 1자루
// 티셔츠는 같은 사이즈의 T장 묶음으로만 주문 가능
// 펜은 한 종류로, P자루씩 묶음으로 주문하거나 한 자루씩 주문 가능
// 티셔츠는 남아도 되지만 부족해서는 안 되고 신청한 사이즈대로 나눠주어야 한다. 펜은 남거나 부족해서는 안 되고 정확히 참가자 수만큼 준비되어야 한다.

let N = Number(inputs[0]);
let nums = inputs[1].split(' ').map(Number);
let [T, P] = inputs[2].split(' ').map(Number);
let tCnt = 0;

for (let num of nums) {
  if (num > T) {
    tCnt += Math.ceil(num / T);
    continue;
  }

  if (0 < num) {
    tCnt++;
  }
}

console.log(tCnt);

let sum = nums.reduce((acc, v) => acc + v, 0);

console.log(Math.floor(sum / P), sum % P);
