// Run by Node.js
const readline = require('readline');

function solution(N, Q, board, points) {
	let answer = 0;
	
	for (let i = 0; i < Q; i++) {
		let point = points[i];
		let value = [];
		let r = [point[0][0], point[1][0], point[2][0]];
		let c = [point[0][1], point[1][1], point[2][1]];
		
		let minC = c[0];
		let maxC = c[1];
		
		if (r[1] === r[2] && c[0] === c[1]) {
			for (let i = r[0]; i <= r[2]; i++) {
				value = value.concat(board[i].slice(c[0], maxC + 1));
				maxC++;
			}
		} else if (r[0] === r[1] && c[1] === c[2]) {
			for (let i = r[0]; i <= r[2]; i++) {
				value = value.concat(board[i].slice(minC, c[1] + 1));
				minC++;
			}
		} else if (r[0] === r[1] && c[0] === c[2]) {
			for (let i = r[0]; i <= r[2]; i++) {
				value = value.concat(board[i].slice(c[0], maxC + 1));
				maxC--;
			}
		} else if (r[1] === r[2] && c[0] === c[2]) {
			for (let i = r[0]; i <= r[2]; i++) {
				value = value.concat(board[i].slice(minC, c[0] + 1));
				minC--;
			}
		}
		
		answer = value.reduce((acc, v) => acc + v, 0);
		
		console.log(answer)
	}
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let Q = null;
	let board = [];
	let points = [];
	let cntB = 0;
	let cntP = 0;
	
	for await (const line of rl) {
		if (!N && !Q) {
			[N, Q] = line.split(' ').map(Number);
		} else if (cntB !== N){
			board.push(line.split(' ').map(Number));
			cntB++;
		} else {
			let point = line.split(' ').map(Number).map(v => v - 1);
			let temp = [];
			for (let i = 0; i < point.length; i += 2) {
				temp.push([point[i], point[i + 1]])
			}
			
			temp.sort((a, b) => {
				if (a[0] === b[0]) {
					return a[1] - b[1];
				}
				
				return a[0] - b[0];
			});
			points.push(temp);
			cntP++;
		}
		
		if (cntB + cntP === N + Q) {
			rl.close();
		}
	}

	solution(N, Q, board, points);
	process.exit();
})();
