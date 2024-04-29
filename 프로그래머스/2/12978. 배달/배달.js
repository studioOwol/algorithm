function solution(N, road, K) {
    let dist = Array(N + 1).fill(Infinity);
    let graph = Array.from({length: N + 1}, () => []);
    
    for (let v of road) {
        let [start, end, cost] = v;
        
        graph[start].push([end, cost]);
        graph[end].push([start, cost]);
    }
    
    const dijkstra = () => {
        let queue = [[1, 0]];
        dist[1] = 0;
    
        while (queue.length) {
            let [cur, d] = queue.shift();
        
            if (dist[cur] < d) continue;
        
            for (let i of graph[cur]) {
                let node = i[0];
                let cost = d + i[1];
            
                if (cost < dist[node]) {
                    dist[node] = cost;
                    queue.push([node, cost]);
                }
            }
        }
    }
    
    dijkstra();
    
    let result = 0;
    
    for (let i = 1; i <= N; i++) {
        if (dist[i] <= K) {
            result++;
        }
    }
    
    return result;
}

