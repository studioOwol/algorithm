function solution(maps) {
    const arrMap = maps.map((string) => string.split(""));
    const rowLength = arrMap.length - 1;
    const columnLength = arrMap[0].length - 1;
    const dRow = [1, 0, -1, 0];
    const dCol = [0, 1, 0, -1];
    const result = [];

    const bfs = (row, col, count) => {
        if (row > rowLength || col > columnLength || row < 0 || col < 0) {
            return count;
        }
        if (arrMap[row][col] === "X") {
            return count;
        }

        count += Number(arrMap[row][col]);
        arrMap[row][col] = "X";

        for (let i = 0; i < 4; i++) {
            count = bfs(row + dRow[i], col + dCol[i], count);
        }

        return count;
    };

    for (let i = 0; i <= rowLength; i++) {
        for (let j = 0; j <= columnLength; j++) {
            if (arrMap[i][j] === "X") {
                continue;
            }
            result.push(bfs(i, j, 0));
        }
    }

    return result.length ? result.sort((a, b) => a - b) : [-1];
}