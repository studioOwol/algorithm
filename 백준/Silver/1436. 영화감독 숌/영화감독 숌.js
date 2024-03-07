let n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let num = 666;
let cnt = 1;

while (true) {
  if (n === cnt) {
    break;
  }

  num++;

  if (String(num).includes('666')) {
    cnt++;
  }
}

console.log(num);
