// Run by Node.js
const readline = require('readline');

let N, M, K;
let graph;
let dist;
let visited;

function solution(infos, edges) {
	[N, M, K] = infos;
	graph = Array.from({length: N + 1}, () => []);
	dist = new Array(N + 1).fill(0);
	
	
	for (let edge of edges) {
		let [start, end] = edge;
		
		graph[start].push(end);
	}
	
	for (let i = 1; i <= N; i++) {
		if (i === K) continue;
		visited = new Array(N + 1).fill(false);
		bfs(i);
	}
	
	if (dist.every(v => v === 0)) {
		console.log(-1);
		return;
	}
	
	console.log(dist.lastIndexOf(Math.max(...dist)));
}

function bfs(end) {
	let queue = [[K, 0]];
	visited[K] = true;
	
	while (queue.length) {
		let [node, cnt] = queue.shift();
		
		if (node === end) {
			dist[node] = cnt + Math.abs(K - end);
			return;
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
	let infos = null;
	let edges = [];
	
	for await (const line of rl) {
		if (!infos) {
			infos = line.split(' ').map(Number);
		} else {
			edges.push(line.split(' ').map(Number));
		}
		
		if (edges.length === infos[1]) {
			rl.close();
		}
	}
	
	solution(infos, edges);
	process.exit();
})();
