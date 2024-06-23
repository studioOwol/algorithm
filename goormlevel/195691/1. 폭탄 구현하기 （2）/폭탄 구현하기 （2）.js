const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function solution(N, K, board, bombs) {
	let bombValue = Array.from({length: N}, () => Array(N).fill(0));
	let ds = [[0, 0], [0, 1], [1, 0], [0, -1], [-1, 0]];
	
	for (let [r, c] of bombs) {
		for (let [dr, dc] of ds) {
			let nr = r + dr;
			let nc = c + dc;
			
			if (!(0 <= nr && nr < N && 0 <= nc && nc < N)) {
				continue;
			}
			
			if (board[nr][nc] === '#') {
				continue;
			}
			
			if (board[nr][nc] === '@') {
				bombValue[nr][nc] += 2;
			} else {
				bombValue[nr][nc] += 1;
			}
		}
	}
	
	console.log(Math.max(...bombValue.flat()));
}

let input;
let N = null;
let K = null;
let cntN = 0;
let cntK = 0;
let board = [];
let bombs = [];

rl.on('line', (line) => {
	if (!N && !K) {
		[N, K] = line.split(' ').map(Number);
	} else if (cntN !== N) {
		board.push(line.split(' '));
		cntN++;
	} else {
		bombs.push(line.split(' ').map(Number).map(v => v - 1));
		cntK++;
	}
	
	if (cntN + cntK === N + K) {
		rl.close();
	}
}).on('close', () => {
	
	solution(N, K, board, bombs)
	process.exit()
})