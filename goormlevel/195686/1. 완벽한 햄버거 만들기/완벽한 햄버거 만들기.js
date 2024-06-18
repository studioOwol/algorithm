const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function solution(n, grades) {
	let bestIdx = grades.indexOf(Math.max(...grades));
	let burger = [];
	
	for (let i = 0; i <= bestIdx; i++) {
		if (burger.length === 0) {
			burger.push(grades[i]);
			continue;
		}
		
		if (burger[burger.length - 1] <= grades[i]) {
			burger.push(grades[i]);
		} else {
			break;
		}
	}
	
	for (let i = bestIdx + 1; i < n; i++) {
		if (burger[burger.length - 1] >= grades[i]) {
			burger.push(grades[i]);
		} else {
			break;
		}
	}
	
	if (burger.length === n) {
		let sum = burger.reduce((acc, v) => acc + v, 0);
		console.log(sum);
	} else {
		console.log(0);
	}
}

let N = null;
let grades = [];

rl.on('line', (line) => {
	if (!N) {
		N = +line
	} else {
		grades = line.split(' ').map(Number);
	}
	
	if (N === grades.length) {
		rl.close();
	}
}).on('close', () => {
	
	solution(N, grades);
	process.exit();
})