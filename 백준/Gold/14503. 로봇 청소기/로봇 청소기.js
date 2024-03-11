let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let [n, m] = inputs.shift().split(' ').map(Number);
let [fr, fc, fd] = inputs.shift().split(' ').map(Number);
let room = inputs.map((el) => el.split(' ').map(Number));
room[fr][fc] = 2;
let robot = { r: fr, c: fc, d: fd, cnt: 1 };
let ds = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const findRoom = () => {
  let flag = false;

  for (let d of ds) {
    let nr = robot.r + d[0];
    let nc = robot.c + d[1];

    if (!(0 <= nr && nr < n && 0 <= nc && nc < m)) {
      continue;
    }

    if (room[nr][nc] === 0) {
      flag = true;
      break;
    }
  }

  if (flag) {
    for (let i = 0; i < 4; i++) {
      robot.d = (ds.length + robot.d - 1) % ds.length;

      let nr = robot.r + ds[robot.d][0];
      let nc = robot.c + ds[robot.d][1];

      if (!(0 <= nr && nr < n && 0 <= nc && nc < m)) {
        continue;
      }

      if (room[nr][nc] === 0) {
        room[nr][nc] = 2;
        robot.r = nr;
        robot.c = nc;
        robot.cnt++;

        findRoom();
        break;
      }
    }
  } else {
    let nr = robot.r - ds[robot.d][0];
    let nc = robot.c - ds[robot.d][1];

    if (!(0 <= nr && nr < n && 0 <= nc && nc < m)) {
      return;
    }

    if (room[nr][nc] === 1) {
      return;
    }

    robot.r = nr;
    robot.c = nc;

    findRoom();
  }
};

findRoom();

console.log(robot.cnt);
