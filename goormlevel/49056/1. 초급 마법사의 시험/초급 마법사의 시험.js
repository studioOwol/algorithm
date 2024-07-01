// Run by Node.js
const readline = require('readline');

let board;
let visited;
let ds = [[0, 1], [-1, 0], [0, -1], [1, 0]];
let R, C, K;

function solution(sizes, infos) {
	[R, C, K] = sizes;
	spellCnt = Math.floor(K / 10);
	board = infos;
	
	console.log(bfs());
}

function bfs() {
	let queue = [[0, 0, 0, K]];
	visited = Array.from({length : R}, () => Array.from({length : C} , () => Array(K + 1).fill(false)));
	visited[0][0][K] = true;
	
	while (queue.length) {
		let [r, c, time, leftSpell] = queue.shift();

		if (r === R - 1 && c === C - 1) {
			return time;
		}
		
		for (let d of ds) {
			let nr = r + d[0];
			let nc = c + d[1];
			
			if (!(0 <= nr && nr < R && 0 <= nc && nc < C)) {
				continue;
			}
			
			if (visited[nr][nc][leftSpell]) continue;
			
			if (board[nr][nc] === 0) {
				visited[nr][nc][leftSpell] = true;
				queue.push([nr, nc, time + 1, leftSpell]);
			}
			
			if (board[nr][nc] === 1 && 10 <= leftSpell) {
				nr += d[0];
				nc += d[1];
				
				if (!(0 <= nr && nr < R && 0 <= nc && nc < C)) continue;
				
				if (board[nr][nc] === 0) {
					queue.push([nr, nc, time + 1, leftSpell - 10]);
					visited[nr][nc][leftSpell - 10] = true;
				}
			}
		}
	}
	
	return -1;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let sizes = null;
	let inputs = [];
	
	for await (const line of rl) {
		if (!sizes) {
			sizes = line.split(' ').map(Number);
		} else {
			inputs.push(line.split('').map(Number))
		}
		
		if (inputs.length === sizes[0]) {
					rl.close();
		}
	}
	
	solution(sizes, inputs);
	process.exit();
})();
