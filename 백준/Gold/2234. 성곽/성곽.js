const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');


const solve = (input) => {
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];

  const castle = input.map(v => v.split(' ').map(Number))
  const [W, H] = castle.shift();
  let visited = Array.from(Array(H), () => Array(W).fill(0));
  let area = 0;
  const sizes = [0];
  let maxSize = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (!visited[i][j]) {
        let size = 1;
        area++;
        const q = [];
        q.push([i, j]);
        visited[i][j] = area;
        while (q.length > 0) {
          const [x, y] = q.shift();
          const wall = castle[x][y];
          for (let k = 0; k < 4; k++) {
            if (!(wall & (1 << k))) {
              const nx = x + dx[k]
              const ny = y + dy[k]
              if (nx >= 0 && ny >= 0 && nx < H && ny < W && !visited[nx][ny]) {
                q.push([nx, ny])
                visited[nx][ny] = area;
                size++;
              }
            }
          }
        }
        sizes.push(size);
      }
    }
  }

  // console.log(visited.map(v => v.join(' ')).join('\n'));


  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      const now = visited[i][j];
      const wall = castle[i][j];
      for (let k = 0; k < 4; k++) {
        if (wall & (1 << k)) {
          const ni = i + dx[k];
          const nj = j + dy[k];
          if (ni >= 0 && nj >= 0 && ni < H && nj < W && visited[ni][nj] != now) {
            const next = visited[ni][nj]
            let temp = sizes[now] + sizes[next];
            if (maxSize < temp) {
              maxSize = temp;
            }
          }
        }
      }
    }
  }
  console.log(area);// 이성에 있는 방의 개수
  console.log(Math.max(...sizes));
  console.log(maxSize)


}

solve(input);