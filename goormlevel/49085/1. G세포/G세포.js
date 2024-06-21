// Run by Node.js
const readline = require('readline');

function solution(n) {
	let binary = n.toString(2).split('').reverse();
	let minCnt = binary.filter(v => v !== '0').length;
	console.log(minCnt);
	let times = [];
	
	for (let i = 0; i < binary.length; i++) {
		if (binary[i] === '1') {
			times.push(i);
		}
	}
	
	console.log(times.join(' '));
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N;
	
	for await (const line of rl) {
		N = +line;
		rl.close();
	}
	
	solution(N);
	process.exit();
})();
