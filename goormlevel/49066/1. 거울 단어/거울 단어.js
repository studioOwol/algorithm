// Run by Node.js
const readline = require('readline');

function solution(n, words) {
	let mirrorMap = {
		b: 'd',
		i: 'i',
		l: 'l',
		m: 'm',
		n: 'n',
		o: 'o',
		u: 'u',
		v: 'v',
		w: 'w',
		x: 'x',
		d: 'b',
		q: 'p',
		p: 'q',
		s: 'z',
		z: 's',

	}
	let result = [];
	
	for (let word of words) {
		let newWord = '';
		for (let i = word.length - 1; i >= 0; i--) {
			if (mirrorMap[word[i]] !== undefined) {
				newWord += mirrorMap[word[i]];
			}
		}
		
		if (word === newWord) {
			result.push('Mirror');
		} else {
			result.push('Normal');
		}
	}
	
	console.log(result.join('\n'));
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let cnt = 0;
	let inputs = [];
	
	for await (const line of rl) {
		if (!N) {
			N = +line;
		} else {
			inputs.push(line);
			cnt++;
		}
		
		if (cnt === N) {
			rl.close();
		}
	}
	
	solution(N, inputs);
	process.exit();
})();
