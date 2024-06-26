const readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let visited;
let graph;

function solution(infos, edges) {
	let [n, m, s, e] = infos;
	graph = Array.from({length: n + 1}, () => []);
	
	for (let [start, end] of edges) {
		graph[start].push(end);
		graph[end].push(start);
	}
	
	for (let i = 1; i <= n; i++) {
		visited = Array(n + 1).fill(false);
		
		if (i === s || i === e) {
			console.log(-1);
			continue;
		}
		
		visited[i] = true;
		console.log(bfs(i, s, e));
	}
}

function bfs(idx, s, e) {
	let queue = [[s, 1]];
	visited[s] = true;
	
	while (queue.length) {
		let [node, cnt] = queue.shift();
		
		if (node === e) {
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

let infos = null;
let edges = [];
rl.on('line', (line) => {
	if (!infos) {
		infos = line.split(' ').map(Number);
	} else {
		edges.push([...line.split(' ').map(Number)]);
	}
	
	if (edges.length === infos[1]) {
		rl.close();
	}
}).on('close', () => {
	
	solution(infos, edges);
	process.exit();
})