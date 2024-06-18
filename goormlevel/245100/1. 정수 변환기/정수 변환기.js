// Run by Node.js
const readline = require('readline');

function solution(n, k, s) {
	let result = '';
	
	for (let i = 0; i < n; i++) {
		let num = Number(s[i]) + k;
		result += String(num);
	}
	
	console.log(result);
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let K = null;
	let S = null;
	let cnt = 0;
	
	for await (const line of rl) {
		if (!N && !K) {
			[N, K] = line.split(' ').map(Number);
			cnt++;
		} else {
			S = line;
			cnt++;
		}
		
		if (cnt === 2) {
			rl.close();
		}
	}
	
	solution(N, K, S);
	process.exit();
})();
