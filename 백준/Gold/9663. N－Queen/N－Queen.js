let N = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let cnt = 0;
let row = Array(N).fill(0);

dfs(0);

console.log(cnt);

// r행 c열에 퀸을 둘 수 있는지 판단하는 메서드
function isValid(r, c) {
  for (let i = 0; i < r; i++) {
    if (c === row[i]) return false;
    if (Math.abs(c - row[i]) === r - i) return false;
  }
  return true;
}

function dfs(r) {
  if (r === N) {
    cnt++;
    return;
  }

  for (let i = 0; i < N; i++) {
    if (isValid(r, i)) {
      row[r] = i;
      dfs(r + 1);
    }
  }
}
