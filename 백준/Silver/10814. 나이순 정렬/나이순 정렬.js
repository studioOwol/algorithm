let [n, ...inputs] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let members = inputs.map((el) => el.split(' '));

members.sort((a, b) => {
  if (Number(a[0]) !== Number(b[0])) {
    return Number(a[0]) - Number(b[0]);
  }
  return 0;
});

console.log(members.map((el) => el.join(' ')).join('\n'));
