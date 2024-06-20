// Run by Node.js
const readline = require('readline');

function solution(n, records) {
	let result = new Array(2).fill(0);
	
	for (let record of records) {
		if (record === 'D') {
			result[0]++;
		} else {
			result[1]++;
		}
		
		if (Math.abs(result[0] - result[1]) === 2) {
			break;
		}
	}
	
	console.log(result.join(':'))
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let records = [];
	
	for await (const line of rl) {
		if (!N) {
			N = +line;
		} else {
			records.push(line);
		}
		
		if (records.length === N) {
			rl.close();
		}
	}
	
	solution(N, records);
	process.exit();
})();
