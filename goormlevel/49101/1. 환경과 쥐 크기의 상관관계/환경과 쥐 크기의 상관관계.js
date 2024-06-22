// Run by Node.js
const readline = require('readline');

function solution(n, a, b) {
	a.sort((a, b) => a - b);
	b.sort((a, b) => a - b);
	
	let mouseA = getMouse(a);
	let mouseB = getMouse(b);
	
	console.log(`${mouseA} ${mouseB}`);
	console.log(mouseA > mouseB ? 'good' : 'bad');
}

function getMouse(mouse) {
	let max = -Infinity;
	let mid = 0;
	let left = 0;
	let right = 0;
	
	while (left < mouse.length) {
		let diff = mouse[left] - mouse[right];
		
		if (diff > 4) {
			right++;
		} else {
			let cnt = (left + 1) - right;
			if (cnt > max) {
				max = cnt;
				mid = Math.floor((mouse[left] + mouse[right]) / 2);
			}
			left++;
		}
	}
	
	return mid;
} 


(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let a = [];
	let b = [];
	let cnt = 0;
	
	for await (const line of rl) {
		if (!N) {
			N = +line;
			cnt++;
		} else if (a.length === 0) {
			a = line.split(' ').map(Number);
			cnt++;
		} else {
			b = line.split(' ').map(Number);
			cnt++;
		}
		
		if (cnt === 3) {
			rl.close();
		}
	}
	
	solution(N, a, b);
	process.exit();
})();
