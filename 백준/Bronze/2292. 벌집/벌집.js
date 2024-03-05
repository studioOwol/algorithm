let n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();

// 벌집 겹의 개수
let cnt = 1;
// 한 겹당 최소값
let minRange = 2;

while (minRange <= n) {
  // 다음 겹의 최소값 갱신
  minRange = minRange + cnt * 6;
  cnt++;
}

console.log(cnt);
