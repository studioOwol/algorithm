const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let permute = new Array(3);
let length = 0;
let string;
let result = [];
let	max = 0;

function solution(N, S) {
	length = N;
	string = S;
	
	getPermutation(1, 0);
	
	let sorted = [...new Set(result.flat())].sort((a, b) => a.localeCompare(b));
	
	for (let way of result) {
		let score = way.reduce((acc, v) => acc + (sorted.indexOf(v) + 1), 0);
		
		if (max < score) {
			max = score;
		}
	}
	
	console.log(max);
}

function getPermutation(start, depth) {
	if (depth === 3) {
		if (permute.reduce((a, b) => a + b , 0) === length) {
			let devideArr = permute.slice();
			let curIdx = 0;
			let way = [];
			
			for (let len of devideArr) {
				way.push(string.substring(curIdx, curIdx + len));
				curIdx += len;
			}
			
			result.push(way.slice());
		}
		return;
	}
	
	for (let i = 1; i < length; i++) {
		permute[depth] = i;
		getPermutation(i, depth + 1);
	}
}

let N;
let S;

rl.on('line', (line) => {
	if (!N) {
		N = +line;
	} else {
		S = line;
	}
}).on('close', () => {
	solution(N, S);
	
	process.exit();
})