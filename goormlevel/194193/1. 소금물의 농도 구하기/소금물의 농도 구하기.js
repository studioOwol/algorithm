// Run by Node.js
const readline = require('readline');

function solution(n, m) {
	let salt = Math.floor(n / 100) * 7;
	let water = n - salt;
	
	console.log(((salt / (water + m + salt)) * 100).toFixed(2));
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let inputs = [];
	
	for await (const line of rl) {
		inputs.push(...line.split(' ').map(Number));
		rl.close();
	}
	
	solution(inputs[0], inputs[1]);
	process.exit();
})();
