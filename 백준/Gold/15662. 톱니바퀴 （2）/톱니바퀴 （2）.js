let inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n');

let t = Number(inputs[0]);
let gears = inputs
  .slice(1, Number(inputs[0]) + 1)
  .map((el) => el.split('').map(Number));
let commands = inputs
  .slice(Number(inputs[0]) + 2)
  .map((el) => el.split(' ').map(Number));
let visited;
let cnt = 0;

const rotateGear = (gearIdx, command) => {
  if (visited[gearIdx]) {
    return;
  }

  visited[gearIdx] = true;

  let left = gears[gearIdx][6];
  let right = gears[gearIdx][2];

  if (command === 1) {
    let tmpNum = gears[gearIdx][7];
    for (let i = 7; i > 0; i--) {
      gears[gearIdx][i] = gears[gearIdx][i - 1];
    }
    gears[gearIdx][0] = tmpNum;
  }

  if (command === -1) {
    let tmpNum = gears[gearIdx][0];
    for (let i = 0; i < 7; i++) {
      gears[gearIdx][i] = gears[gearIdx][i + 1];
    }
    gears[gearIdx][7] = tmpNum;
  }

  if (gearIdx + 1 < t) {
    if (gears[gearIdx + 1][6] !== right) {
      rotateGear(gearIdx + 1, -command);
    }
  }

  if (gearIdx - 1 >= 0) {
    if (gears[gearIdx - 1][2] !== left) {
      rotateGear(gearIdx - 1, -command);
    }
  }
};

for (let i = 0; i < commands.length; i++) {
  visited = Array(gears.length).fill(false);
  let gearIdx = commands[i][0] - 1;
  let command = commands[i][1];

  rotateGear(gearIdx, command);
}

for (let i = 0; i < gears.length; i++) {
  if (gears[i][0] === 1) {
    cnt++;
  }
}

console.log(cnt);
