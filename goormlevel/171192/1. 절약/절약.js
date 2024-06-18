// Run by Node.js
const readline = require('readline');

function solution(n, info) {
	let total = 0;
	let isSuccess = true;
	
	for (let i = 0; i < n; i++) {
		let [command, amount] = info[i];
		
		if (command === 'in') {
			total += Number(amount);
		} else {
			total -= Number(amount);
		}
		
		if (total < 0) {
			isSuccess = false;
			break;
		}
	}
	
	if (isSuccess) {
		console.log('success');
	} else {
		console.log('fail');
	}
}


(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null
	let cnt = 0;
	let inputs = [];
	
	for await (const line of rl) {
		if (!N) {
			N = +line
		} else {
			inputs.push(line.split(' '))
			cnt++;
		}
		
		if (cnt === N) {
			rl.close();
		}
	}
	
	solution(N, inputs);
	process.exit();
})();
