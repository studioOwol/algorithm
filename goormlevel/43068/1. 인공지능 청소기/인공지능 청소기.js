// Run by Node.js
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function solution(n, locations) {
	let result = [];
	
	for (let i = 0; i < n; i++) {
			let [x, y, time] = locations[i];
			let absSum = Math.abs(x) + Math.abs(y);
		
			if (absSum > time) {
				result.push('NO');
				continue;
			}
		
			if (absSum % 2 === 0 && time % 2 === 0) {
				result.push('YES');
				continue;
			}
		
			if (absSum % 2 === 1 && time % 2 === 1) {
				result.push('YES');
				continue;
			}
		
			result.push('NO');
	}
	
	console.log(result.join('\n'));
}

let N;
let data = [];
rl.on("line", function(line) {
	if (!N) {
		N = +line;
	} else {
		data.push(line.split(' ').map(Number));
	}
	
	if (data.length === N) {
		rl.close();
	}
}).on("close", function() {
	
	solution(N, data);
	process.exit();
});