const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let cntArr = Array(31).fill(0);
let visited;
let ds = [[0, 1], [1, 0], [0, -1], [-1, 0]];
let town;

function solution(n, k, board) {
	town = board;
	visited = Array.from({length: n}, () => Array(n).fill(false));
	
	for (let r = 0; r < n; r++) {
		for (let c = 0; c < n; c++) {
			if (!visited[r][c]) {
				bfs(r, c, n, k);
			}
		}
	}
	
	console.log(cntArr.lastIndexOf(Math.max(...cntArr)));
}

function bfs(r, c, n, k) {
	let queue =[[r, c]];
	let cnt = 0;
	visited[r][c] = true;

	while (queue.length) {
		let [cr, cc] = queue.shift();
		cnt++;
		
		for (let d of ds) {
			let nr = cr + d[0];
			let nc = cc + d[1];
			
			if (!(0 <= nr && nr < n && 0 <= nc && nc < n)) {
				continue;
			}
			
			if (!visited[nr][nc] && town[r][c] === town[nr][nc]) {
				visited[nr][nc] = true;
				queue.push([nr, nc]);
			}
		}
	}
	
	if (cnt >= k) {
		cntArr[town[r][c]]++;
	}
}

let N = null;
let K = null;
let cnt = 0;
let board = [];

rl.on('line', (line) => {
	if (!N && !K) {
		[N, K] = line.split(' ').map(Number);
	} else {
		board.push(line.split(' ').map(Number));
		cnt++;
	}
	
	if (cnt === N) {
		rl.close();
	}
}).on('close', () => {
	
	solution(N, K, board);
	process.exit();
})