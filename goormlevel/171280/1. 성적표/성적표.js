// Run by Node.js
const readline = require('readline');

function solution(counts, info) {
	let [N, M] = counts;
	let scoreMap = {};
	let cntMap = {};
	let avg = [];
	
	for (let i = 1; i <= M; i++) {
		scoreMap[i] = 0;
		cntMap[i] = 0;
	}
	
	for (let i of info) {
		let [subject, score] = i;
		
		scoreMap[subject] += score;
		cntMap[subject]++;
	}
	
	for (let i = 1; i <= M; i++) {
		if (cntMap[i] === 0) {
			avg.push(0);
			continue;
		}
		
		avg.push(scoreMap[i] / cntMap[i]);
	}
	
	console.log(avg.indexOf(Math.max(...avg)) + 1);
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let cnt = [];
	let info = [];
	
	for await (const line of rl) {
		if (cnt.length === 0) {
			cnt = line.split(' ').map(Number);
		} else {
			info.push(line.split(' ').map(Number));
		}
		
		if (info.length === cnt[0]) {
			rl.close();
		}
	}
	
	solution(cnt, info);
	process.exit();
})();
