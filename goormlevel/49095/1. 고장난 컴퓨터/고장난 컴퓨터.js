// Run by Node.js
const readline = require('readline');

function solution(n, c, time) {
	let start = time[0];
	let diff = [];
	let answer = [];
	
	for (let i = 1; i < n; i++) {
		diff.push(time[i] - start);
		start = time[i];
	}
	
	diff.reverse();
	
	if (diff.length === 0) {
		console.log(1);
		return;
	}
	
	for (let i = 0; i < diff.length; i++) {
		if (diff[i] > c) {
			break;
		}
		
		answer.push(diff[i]);
	}
	
	console.log(answer.length + 1);
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let c = null;
	let inputs = [];
	
	for await (const line of rl) {
		if (!N) {
			[N, c] = line.split(' ').map(Number);
		} else {
			inputs = line.split(' ').map(Number);
		}
		
		if (inputs.length === N) {
			rl.close();
		}
	}
	
	solution(N, c, inputs);
	process.exit();
})();
