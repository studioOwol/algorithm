// Run by Node.js
const readline = require('readline');

function solution(n, friends, track) {
	let map = {};
	map[track] = 0;
	
	for (let friend of friends) {
		if (map[friend] === undefined) {
			map[friend] = 0;
		}
		
		map[friend]++;
	}
	
	console.log(map[track]);
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let inputs = [];
	
	for await (const line of rl) {
		inputs.push(line);
		
		if (inputs.length === 3) {
			rl.close();
		}
	}
	
	let N = Number(inputs[0]);
	let friendsInfo = inputs[1].split(' ');
	let trackInfo = inputs[2];
	
	solution(N, friendsInfo, trackInfo);
	process.exit();
})();
