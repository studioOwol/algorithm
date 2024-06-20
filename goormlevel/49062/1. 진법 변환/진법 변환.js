// Run by Node.js
const readline = require('readline');

function solution(n, t) {
	for (let i = 2; i <= 16; i++) {
		let num = Number(n).toString(i).toUpperCase();
		
		if (num === t) {
			console.log(i);
			break;
		}
	}
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N;
	let T;
	
	for await (const line of rl) {
		[N, T] = line.split(' ');
		rl.close();
	}
	
	solution(N, T);
	process.exit();
})();
