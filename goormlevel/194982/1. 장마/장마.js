// Run by Node.js
const readline = require('readline');

function solution(n, m, grounds, locations) {
	let set = new Set();
	
	for (let i = 0; i < m; i++) {
		let [start, end] = locations[i];
		
		for (let j = start; j <= end; j++) {
			set.add(j);
			grounds[j - 1]++;
		}
		
		if ((i + 1) % 3 === 0) {
			for (let s of set) {
				grounds[s - 1]--;
			}
			set.clear();
		}
	}
	
	console.log(grounds.join(' '));
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let inputs = [];
	
	for await (const line of rl) {
		inputs.push(line);
	}
	
	let [N, M] = inputs[0].split(' ').map(Number);
	let g = inputs[1].split(' ').map(Number);
	let data = inputs.slice(2, 2 + M).map(v => v.split(' ').map(Number));
	
	solution(N, M, g, data);
	process.exit();
})();
