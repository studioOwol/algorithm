// Run by Node.js
const readline = require('readline');

let N, M, K;
let graph;

function solution(infos, edges) {
	[N, M, K] = infos;
	graph = Array.from({length: N + 1}, () => []);
	
	for (let edge of edges) {
		let [start, end] = edge;
		
		graph[start].push(end);
	}

	let result = bfs();
	
	console.log(result > 0 ? result : -1);
}

function bfs() {
	let visited = Array(N + 1).fill(false);
	let queue = [[K, 0]];
	visited[K] = true;
	
	while (queue.length) {
		let [node, cnt] = queue.shift();

		for (let next of graph[node]) {
			if (next === K) {
					return cnt + 1;
			}
			
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
	let infos = null;
	let edges = [];
	
	for await (const line of rl) {
		if (!infos) {
			infos = line.split(' ').map(Number);
		} else {
			edges.push(line.split(' ').map(Number));
		}
		
		if (edges.length === infos[1]) {
			rl.close()
		}
	}
	
	solution(infos, edges);
	process.exit();
})();
