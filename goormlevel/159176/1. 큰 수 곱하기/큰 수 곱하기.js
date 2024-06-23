// Run by Node.js
const readline = require('readline');

function solution(nums) {
	let result = 0;
	
	result = nums.reduce((acc, v) => acc * v, 1);
	
	console.log(result);
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let inputs;
	
	for await (const line of rl) {
		inputs = line.split(' ').map(Number);
		rl.close();
	}
	
	solution(inputs);
	process.exit();
})();
