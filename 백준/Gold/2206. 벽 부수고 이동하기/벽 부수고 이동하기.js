const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const map = input.map((x) => x.split("").map(Number));

// 벽을 부숴야 한다면 최대 1개 부숴도 된다 => 이때 최단 경로

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y) => {
    const queue = [[x, y, 0]];
    const visited = Array.from({ length: 2 }, () =>
        Array.from({ length: N }, () => Array(M).fill(0))
    );

    // 0층은 벽을 부수지 않았을 때의 최단 거리를 저장
    visited[0][x][y] = 1;

    let idx = 0;
    while (queue.length !== idx) {
        const [x, y, breakCnt] = queue[idx]; // 현재 큐에서 하나 뽑기

        if (x === N - 1 && y === M - 1) {
            return visited[breakCnt][x][y];
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

            // 다음 갈 곳이 벽이고 한 번도 안부순 상태라면
            if (map[nx][ny]) {
                if (!breakCnt && !visited[1][nx][ny]) {
                    visited[1][nx][ny] = visited[0][x][y] + 1;
                    queue.push([nx, ny, 1]);
                }
            } else {
                if (visited[breakCnt][nx][ny]) continue; // 방문했다면 이미 최단경로임

                visited[breakCnt][nx][ny] = visited[breakCnt][x][y] + 1;
                queue.push([nx, ny, breakCnt]);
            }
        }

        idx++;
    }

    return -1;
};

const res = bfs(0, 0);

console.log(res);
