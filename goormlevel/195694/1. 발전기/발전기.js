const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let town;
let visited;
let houses = [];
let ds = [[0, 1], [-1, 0], [0, -1], [1, 0]];
let n;

function solution(N, board) {
	town = board;
	n = N;
	visited = Array.from({length: n} , () => Array(n).fill(false));
	let cnt = 0;
	
	for (let r = 0; r < n; r++) {
		for (let c = 0; c < n; c++) {
			if (!visited[r][c] && town[r][c] === 1) {
				visited[r][c] = true;
				bfs(r, c);
				cnt++;
			}
		}
	}
	
	console.log(cnt);
}

function bfs(r, c) {
	let queue = [[r, c]];
	
	while (queue.length) {
		let [cr, cc] = queue.shift();

		for (let d of ds) {
			let nr = cr + d[0];
			let nc = cc + d[1];
		
			if (!(0 <= nr && nr < n && 0 <= nc && nc < n)) {
			continue;
			}
		
			if (!visited[nr][nc] && town[nr][nc] === 1) {
				visited[nr][nc] = true;
				queue.push([nr, nc]);
			}
		}
	}
	
	
}

let N = null;
let inputs = [];

rl.on('line', (line) => {
	if (!N) {
		N = +line
	} else {
		let row = line.split(' ').map(Number);
		inputs.push(row)
	}
	
	if (inputs.length === N) {
		rl.close();
	}
}).on('close', () => {
	
	solution(N, inputs);
	process.exit();
})