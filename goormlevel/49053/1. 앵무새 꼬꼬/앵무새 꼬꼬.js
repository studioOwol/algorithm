// Run by Node.js
const readline = require('readline');

function solution(n, words) {
	let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
	let result = [];
	
	for (let word of words) {
		let newStr = '';
		
		for (let i = 0; i < word.length; i++) {
			if (!vowels.includes(word[i])) {
				continue;
			}
			
			newStr += word[i];
		}
		
		if (newStr === '') {
			result.push('???');
		} else {
			result.push(newStr);
		}
	}
	
	console.log(result.join('\n'));
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let N = null;
	let inputs = [];
	
	for await (const line of rl) {
		if (!N) {
			N = +line;
		} else {
			inputs.push(line);
		}
		
		if (inputs.length === N) {
			rl.close();
		}
	}
	
	solution(N, inputs)
	process.exit();
})();
