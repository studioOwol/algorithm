let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let current = 100;
let goal = inputs[0];
let brokenCnt = Number(inputs[1]);
let buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// +, - 로만 goal 채널에 갈 수 있는 횟수
let minPress = Math.abs(current - Number(goal));

// 고장난 버튼이 없을 때
if (!brokenCnt) {
  minPress = Math.min(goal.length, minPress);
  console.log(minPress);
  return;
}

// 버튼이 다 고장났을 때
if (brokenCnt === 10) {
  console.log(minPress);
  return;
}

let brokens = inputs[2].split(' ');
let availables = buttons.filter((el) => !brokens.includes(el));
let sizes = [-1, 0, 1];

const recursion = (arr, number, size) => {
  if (number.length === size) {
    minPress = Math.min(
      Math.abs(Number(number) - Number(goal)) + size,
      minPress
    );
    return;
  }

  for (let button of arr) {
    let newNum = number + button;
    recursion(arr, newNum, size);
  }
};

for (let i = 0; i < sizes.length; i++) {
  // goal 채널이 한 자리인 경우 -1(0자리) 제외
  if (goal.length === 1 && i === 0) {
    continue;
  }
  recursion(availables, '', goal.length + sizes[i]);
}

console.log(minPress);
