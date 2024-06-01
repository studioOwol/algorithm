let dices = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let routes = [
  [
    0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
    40,
  ],
  [10, 13, 16, 19, 25, 30, 35, 40],
  [20, 22, 24, 25, 30, 35, 40],

  [30, 28, 27, 26, 25, 30, 35, 40],
];
let pieces = Array(4)
  .fill(0)
  .map(() => ({ route: 0, routeIdx: 0, isBlue: false }));
let max = 0;

recursiveSolve(0, 0, 10);
console.log(max);

function recursiveSolve(total, depth, limit) {
  if (depth === limit) {
    max = Math.max(max, total);
    return;
  }

  for (let i = 0; i < 4; i++) {
    let curI = pieces[i].routeIdx;
    let curR = pieces[i].route;
    let curB = pieces[i].isBlue;

    // 말이 여정을 종료하는 경우 = 도착 지점을 넘음
    if (curR === -1) {
      continue;
    }

    let nextI = curI + dices[depth];
    let nextR = getNextRoute(curR, nextI);
    let nextB = false;

    // 파란색 지점에 멈추어 경로가 바뀌면 다음 경로의 첫번째 인덱스부터 출발하도록 변경
    if (nextR !== curR) {
      nextI = 0;
      nextB = true;
    }

    // 각 말이 충돌하는 경우
    if (!isMove(i, nextR, nextI, nextB)) {
      continue;
    }

    let score = 0;
    // 말이 도착한 경우가 아니라면 점수 계산
    if (nextR !== -1) {
      score = routes[nextR][nextI];
    }

    // 경로, 경로 내 위치(routeIdx), 파란색 지점 여부 갱신
    pieces[i].route = nextR;
    pieces[i].routeIdx = nextI;
    pieces[i].isBlue = nextB;

    recursiveSolve(total + score, depth + 1, limit);

    // 모든 경우의 수를 고려하기 위한 백트래킹 - 재귀 한 번 끝나고 돌려놓기
    pieces[i].route = curR;
    pieces[i].routeIdx = curI;
    pieces[i].isBlue = curB;
  }
}

function getNextRoute(curR, nextI) {
  if (isGoal(curR, nextI)) {
    return -1;
  }

  if (curR === 0) {
    // 처음 경로에서(routes[0]) 파란색 지점에 도착하면 경로 갱신
    if (routes[0][nextI] === 10) {
      return 1;
    }
    if (routes[0][nextI] === 20) {
      return 2;
    }
    if (routes[0][nextI] === 30) {
      return 3;
    }
  }

  return curR;
}

// 말이 도착했는지 확인하는 함수 - 경로 배열 길이 초과
function isGoal(curR, nextI) {
  if (curR === 0 && nextI > 20) {
    return true;
  }

  if (curR === 1 && nextI > 7) {
    return true;
  }

  if (curR === 2 && nextI > 6) {
    return true;
  }

  if (curR === 3 && nextI > 7) {
    return true;
  }

  return false;
}

function isMove(pieceIdx, nextR, nextI, nextB) {
  // 도착하는 경우 상관 없음 = 움직일 수 있음
  if (nextR === -1) {
    return true;
  }

  for (let i = 0; i < 4; i++) {
    // 비교할 말이 자기 자신이거나 이미 도착한 경우 비교할 필요가 없음
    if (i === pieceIdx || pieces[i].route === -1) {
      continue;
    }

    // 같은 경로, 같은 위치에 다른 말이 있으면 갈 수 없음
    if (nextR === pieces[i].route && nextI === pieces[i].routeIdx) {
      return false;
    }

    // 가운데 + 경로에 위치하면서, 파란색 지점이 아닌 경우
    if (nextR !== 0 && pieces[i].route !== 0 && !nextB && !pieces[i].isBlue) {
      // + 경로 중 25 -> 30 -> 35 -> 40 겹치는 경로인데, 각 경로에서 도착할 수 있는 인덱스(칸 수)가 다르기 때문에 점수로 비교
      if (
        routes[nextR][nextI] === routes[pieces[i].route][pieces[i].routeIdx]
      ) {
        return false;
      }
    }

    // 처음 경로(routes[0])에서 40에 도착하는 경우 체크
    if (
      routes[nextR][nextI] === 40 &&
      routes[pieces[i].route][pieces[i].routeIdx] === 40
    ) {
      return false;
    }
  }

  return true;
}
