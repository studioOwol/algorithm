// Run by Node.js
const readline = require('readline');

let N, M, K;
let graph;

function solution(sizes, edges) {
	[N, M, K] = sizes;
	graph = Array.from({length: N + 1}, () => []);
	
	for (let edge of edges) {
		let [start, end] = edge;
		
		graph[start].push(end);
		graph[end].push(start);
	}
	
	let result = bfs();
	
	console.log(0 < result && result <= K ? 'YES' : 'NO');
}

function bfs() {
	let visited = new Array(N + 1).fill(false);
	let queue = [[1, 0]];
	visited[1] = true;
	
	while (queue.length) {
		let [node, cnt] = queue.shift();
		
		if (node === N) {
			return cnt;
		}
		
		for (let next of graph[node]) {
			if (!visited[next]) {
				visited[next] = true;
				queue.push([next, cnt + 1]);
			}
		}
	}
	
	return -1;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let sizes = null;
	let edges = [];
	
	for await (const line of rl) {
		if (!sizes) {
			sizes = line.split(' ').map(Number);
		} else {
			edges.push(line.split(' ').map(Number));
		}
		
		if (edges.length === sizes[1]) {
			rl.close();
		}
	}
	
	solution(sizes, edges);
	process.exit();
})();
