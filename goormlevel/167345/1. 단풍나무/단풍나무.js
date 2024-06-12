// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});


function solution(n, area) {
	let ds = [[0, 1], [-1, 0], [0, -1], [1, 0]];
	let time = 0;
	let treeCnt = 0;
	
	for (let r = 0; r < n; r++) {
		for (let c = 0; c < n; c++) {
			if (area[r][c] > 0) {
				treeCnt += area[r][c];
			}
		}
	}
	
	while (treeCnt > 0) {
		let result = Array.from({length: n}, () => Array(n).fill(0));
		
		for (let r = 0; r < n; r++) {
			for (let c = 0; c < n; c++) {
				if (area[r][c] === 0) {
					continue;
				}
				
				let leftCnt = area[r][c];
				
				for (let d of ds) {
					let nr = r + d[0];
					let nc = c + d[1];
					
					if (!(0 <= nr && nr < n && 0 <= nc && nc < n)) {
						continue;
					}
					
					if (area[nr][nc] === 0 && leftCnt > 0) {
						leftCnt--;
						treeCnt--;
					}
				}
				
				result[r][c] = leftCnt;
			}
		}
		
		time++;
		area = result;
	}
	
	console.log(time);
}

let inputs = [];

rl.on('line', (line) => {
	inputs.push(line);
}).on('close', () => {
	let N = +inputs[0];
	let area = inputs.slice(1).map(v => v.split(' ').map(Number));
	
	solution(N, area);
	process.exit();
});
