function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 우, 하, 좌, 상
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false)); // 방문 여부를 나타내는 배열

    const bfs = (r, c) => {
        let queue = [[r, c]];
        let cnt = 0;

        while (queue.length) {
            const [cr, cc] = queue.shift();
            if (visited[cr][cc] || maps[cr][cc] === 'X') continue; // 이미 방문한 곳이거나 바다인 경우 건너뜀
            visited[cr][cc] = true; // 방문한 곳으로 표시
            cnt += Number(maps[cr][cc]);

            for (const [dr, dc] of directions) {
                const nr = cr + dr;
                const nc = cc + dc;

                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                    queue.push([nr, nc]);
                }
            }
        }

        return cnt; // 섬의 크기 반환
    };

    const result = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (!visited[r][c] && maps[r][c] !== 'X') {
                const size = bfs(r, c);
                if (size > 0) {
                    result.push(size);
                }
            }
        }
    }

    return result.length ? result.sort((a, b) => a - b) : [-1];
}