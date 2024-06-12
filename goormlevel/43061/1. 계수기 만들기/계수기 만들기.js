// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function solution(n, max, init, k) {
	max.unshift(0);
	init.unshift(0);
	
	while (k > 0) {
		init[n]++;
		
		for (let i = n; i >= 1; i--) {
			if (init[i] > max[i]) {
				init[i] = 0;
				init[i - 1]++;
			}
		}
		
		k--;
	}
	
	console.log(init.slice(1).join(''));
}

let N, K;
let max;
let init;
let cnt = 0;

rl.on("line", function(line) {
	if (!N) {
		N = +line;
		cnt++;
	} else if (!max) {
		max = line.split(' ').map(Number);
		cnt++;
	} else if (!init) {
		init = line.split(' ').map(Number);
		cnt++;
	} else {
		K = +line;
		cnt++;
	}
	
	if (cnt === 4) {
		rl.close();
	}
}).on("close", function() {
	
	solution(N, max, init, K);
	process.exit();
});