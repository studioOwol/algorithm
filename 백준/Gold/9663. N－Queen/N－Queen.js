let N = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

let cnt = 0;

let col = Array(N + 1).fill(false);
let diag1 = Array(2 * N + 1).fill(false);
let diag2 = Array(2 * N + 1).fill(false);

dfs(1);

console.log(cnt);

function dfs(row) {
  if (row === N + 1) {
    cnt++;
  } else {
    for (let i = 1; i <= N; i++) {
      if (!col[i] && !diag1[row + i] && !diag2[row - i + N]) {
        col[i] = diag1[row + i] = diag2[row - i + N] = true;
        dfs(row + 1);
        col[i] = diag1[row + i] = diag2[row - i + N] = false;
      }
    }
  }
}
