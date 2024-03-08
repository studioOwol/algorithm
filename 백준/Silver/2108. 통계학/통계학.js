let [t, ...nums] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let answer = [];
let map = new Map();
nums.sort((a, b) => a - b);

nums.forEach((num) => {
  map.set(num, (map.get(num) || 0) + 1);
});

// 산술 평균
answer.push(Math.round(nums.reduce((acc, value) => acc + value, 0) / t));

// 중앙값
answer.push(nums[Math.floor(nums.length / 2)]);

// 최빈값
let maxFrequency = Math.max(...Array.from(map.values()));
let modes = [];
map.forEach((value, key) => {
  if (value === maxFrequency) {
    modes.push(key);
  }
});
if (modes.length > 1) {
  modes.sort((a, b) => a - b);
  answer.push(modes[1]);
} else {
  answer.push(modes[0]);
}

// 범위
answer.push(nums[t - 1] - nums[0]);

console.log(answer.join('\n'));
