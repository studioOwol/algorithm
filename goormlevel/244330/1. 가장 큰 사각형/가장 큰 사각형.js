// Run by Node.js
const readline = require('readline');

function solution(n, sizes) {
	let answer = sizes.map(([w, h]) => {
		return w * h;
	});
	
	console.log(Math.max(...answer));
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let cnt = 0;
	const sizes = [];
	
	for await (const line of rl) {
		if (!N) {
			N = +line;
		} else {
			sizes.push(line.split(' ').map(Number));
			cnt++;
		}
		
		if (N === cnt) {
			rl.close();
		}
	}
	
	solution(N, sizes);
	process.exit();
})();
