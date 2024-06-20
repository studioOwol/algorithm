// Run by Node.js
const readline = require('readline');

function solution(n) {
	let result = '';
	
	for (let i = 1; i <= n ** 2; i++) {
		if (i % n === 0) {
			result += i + '\n';
			continue;
		}
		
		result += i + ' ';
	}
	
	console.log(result);
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
