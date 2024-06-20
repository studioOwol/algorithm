const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function solution(n, calculations) {
	let result = [];
	
	for (let cal of calculations) {
		let [a, symbol, b] = cal;
		
		if (symbol === '+') {
			result.push(Number(a) + Number(b));
		}
		
		if (symbol === '-') {
			result.push(Number(a) - Number(b));
		}
		
		if (symbol === '*') {
			result.push(Number(a) * Number(b));
		}
		
		if (symbol === '/') {
			result.push(Math.floor(Number(a) / Number(b)));
		}
	}
	
	console.log(result.reduce((acc, v) => acc + v, 0));
}

let N = null;
let input = [];
rl.on('line', (line) => {
	if (!N) {
		N = +line;
	} else {
		input.push(line.split(' '))
	}
	
	if (input.length === N) {
		rl.close();
	}
}).on('close', () => {
	
	solution(N, input);
	process.exit();
})