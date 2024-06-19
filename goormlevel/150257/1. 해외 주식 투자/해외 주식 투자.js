// Run by Node.js
const readline = require('readline');

function solution(n, info) {
	let evaluated = {};
	
	for (let i = 0; i < n; i++) {
		let price = info[i][0];
		let quantity = info[i][1];
		
		evaluated[i + 1] = Math.floor(price * quantity * 10) / 10;
	}
	
	let result = Object.keys(evaluated).sort((a, b) => {
		if (evaluated[a] === evaluated[b]) {
			return Number(a) - Number(b);
		}
		
		return evaluated[b] - evaluated[a];
	});
	
	console.log(result.join(' '));
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let cnt = 0;
	let inputs = [];
	
	for await (const line of rl) {
		if (!N) {
			N = +line;
		} else {
			inputs.push(line.split(' ').map(Number));
			cnt++;
		}
		
		if (cnt === N) {
			rl.close();
		}
	}
	
	solution(N, inputs);
})();
