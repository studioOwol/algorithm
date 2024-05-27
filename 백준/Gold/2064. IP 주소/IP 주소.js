let [t, ...cases] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let ips = cases.map((ip) => ip.split('.').map(Number));
let network = Array(4).fill(0);
let mask = Array(4).fill(0);
let isNetwork = true;

for (let i = 0; i < 4; i++) {
  let base = ips[0][i];

  // 각 옥텟(8비트)의 첫번째 자리부터 IP 주소들의 공통 비트 찾기
  for (let j = 7; j >= 0; j--) {
    let bit = 1 << j;

    for (let k = 1; k < t; k++) {
      // 공통 비트가 아니면
      if ((base & bit) !== (ips[k][i] & bit)) {
        isNetwork = false;
        break;
      }
    }
    // 네트워크 부분이 아니면 = 호스트 부분은 0
    if (!isNetwork) {
      break;
    }

    // 공통 비트인 부분을 1로 만들기
    mask[i] |= bit;
  }

  // 네트워크 주소 = IP 주소와 서브넷 마스크 비트 AND 연산 수행
  network[i] = base & mask[i];
}

console.log(network.join('.'));
console.log(mask.join('.'));
