// Run by Node.js
const readline = require('readline');

function solution(a, b) {
	let resultA = eval(a);
	let resultB = eval(b);
	
	console.log(resultA > resultB ? resultA : resultB);
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input;
	
	for await (const line of rl) {
		input = line.split(' '); 
		rl.close();
	}
	
	solution(input[0], input[1]);
	process.exit();
})();
