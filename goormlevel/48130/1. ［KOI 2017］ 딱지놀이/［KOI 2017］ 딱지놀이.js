// Run by Node.js
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// 별 = 4, 원 = 3, 네모 = 2, 세모 = 1
// 별 개수 같고 원 개수 다르면 원이 많은 쪽이 이김
// 별, 원 개수 같고, 네모 개수 다르면 네모가 많은 쪽이 이김
// 별, 원, 네모 개수 같고, 세모 개수 다르면 세모가 많은 쪽이 이김
// 모든 모양의 개수가 같으면 무승부

function solution(n, games) {
	let result = [];
	let answer = [];
	
	for (let i = 0; i < games.length; i++) {
		let aTurn = Array(4).fill(0);
		let bTurn = Array(4).fill(0);
		let aList = games[i][0];
		let bList = games[i][1];
		
		for (let num of aList) {
			aTurn[num - 1]++;
		}
		
		for (let num of bList) {
			bTurn[num - 1]++;
		}
		
		result.push([aTurn, bTurn]);
	}
	
	for (let i = 0; i < n; i++) {
		let isSame = result[i][0].every((v, idx) => result[i][1][idx] === v);
		
		if (isSame) {
			answer.push('D');
			continue;
		}
		
		for (let j = 3; j >= 0; j--) {
			if (result[i][0][j] > result[i][1][j]) {
				answer.push('A');
				break;
			} else if (result[i][0][j] < result[i][1][j]) {
				answer.push('B');
				break;
			} else {
				continue;
			}
		}
	}
	
	console.log(answer.join('\n') + '\n');
}

let inputs = []

rl.on('line', (line) => {
	inputs.push(line);
}).on('close', () => {
	let N = inputs[0];
	let games = [];
	
	for (let i = 1; i < 2 * N; i+= 2) {
		let a = inputs[i].split(' ').map(Number).slice(1);
		let b = inputs[i + 1].split(' ').map(Number).slice(1);
		
		games.push([a, b]);
	}
	
	solution(N, games);
	process.exit();
});
