let input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [N, M] = input[0].split(' ').map(Number);
let nums = input[1].split(' ').map(Number);

let permutes = [];
nums.sort((a, b) => a - b);

getPermutations([]);

console.log(permutes.map((el) => el.join(' ')).join('\n'));

function getPermutations(permute) {
  if (permute.length === M) {
    permutes.push([...permute]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!permute.includes(nums[i])) {
      let newPermute = [...permute];
      newPermute.push(nums[i]);
      getPermutations(newPermute);
    }
  }
}
