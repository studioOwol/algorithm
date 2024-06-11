// Run by Node.js
const readline = require('readline');

function solution(arr) {
	arr.sort((a, b) => a - b);
	
	console.log(Math.abs(arr[0] - arr[3]) + Math.abs(arr[1] - arr[2]));
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let nums = [];
	
	for await (const line of rl) {
		nums.push(...line.split(' ').map(Number));
		rl.close();
	}
	
	solution(nums);
	process.exit();
})();
