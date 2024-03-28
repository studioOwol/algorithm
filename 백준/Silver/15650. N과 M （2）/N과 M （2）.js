let [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let combis = [];
let nums = [];

for (let i = 1; i <= N; i++) {
  nums.push(i);
}

getCombinations(nums, M, 0, []);

console.log(combis.map((el) => el.join(' ')).join('\n'));

function getCombinations(arr, size, start, combi) {
  if (combi.length === size) {
    combi.sort((a, b) => a - b);
    combis.push([...combi]);
    return combis;
  }

  for (let i = start; i < arr.length; i++) {
    if (!combi.includes(arr[i])) {
      let newCombi = [...combi];
      newCombi.push(arr[i]);
      getCombinations(arr, size, i + 1, newCombi);
    }
  }
}
