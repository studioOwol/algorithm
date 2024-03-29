let N = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let answer = recursion(N);

console.log(answer.join('\n'));

function recursion(size) {
  // 패턴
  if (size === 3) {
    return ['***', '* *', '***'];
  }

  let prev = recursion(size / 3);
  let result = [];

  for (let line of prev) {
    result.push(line.repeat(3));
  }

  // 가운데 빈 공간
  for (let line of prev) {
    result.push(line + ' '.repeat(size / 3) + line);
  }

  for (let line of prev) {
    result.push(line.repeat(3));
  }

  return result;
}
