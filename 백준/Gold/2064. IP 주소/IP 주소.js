let [t, ...cases] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let ips = cases.map((ip) => ip.split('.').map(Number));
let ip = [];
let mask = [];
let flag = true;

for (let i = 0; i < 4; i++) {
  let min = ips[0][i];
  let max = ips[0][i];

  for (let j = 1; j < t; j++) {
    min &= ips[j][i];
    max |= ips[j][i];
  }

  if (!flag) {
    ip.push(0);
    mask.push(0);
  } else {
    ip.push(min);
    mask.push(255 - (max - min));
  }

  if (min !== max) {
    flag = false;
  }
}

console.log(ip.join('.'));
console.log(mask.join('.'));
