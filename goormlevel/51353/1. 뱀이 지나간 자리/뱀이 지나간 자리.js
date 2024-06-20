// Run by Node.js
const readline = require('readline');
let result = []
let cnt = 1;

function solution(n, m) {
	for (let r = 0; r < n; r++) {
		let row = [];
		for (let c = 0; c < m; c++) {
			if (r % 2 === 0) {
				row.push('#');
			} else {
				row.push('.');
			}
		}
		result.push(row);
	}
	
	for (let r = 1; r < n; r += 2) {
		if (Math.floor(r / 2) % 2 === 0) {
			result[r][m - 1] = '#';
		} else {
			result[r][0] = '#';
		}
	}
	
	console.log(result.map(row => row.join('')).join('\n'));
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N;
	let M;
	
	for await (const line of rl) {
		[N, M] = line.split(' ').map(Number);
		rl.close();
	}
	
	solution(N, M);
	process.exit();
})();
