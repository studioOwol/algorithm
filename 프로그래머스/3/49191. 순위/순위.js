function solution(n, results) {
    let INF = Infinity;
    let graph = Array.from({length: n}, () => Array(n).fill(0));
    let answer = 0;
    
    
    for (let i = 0; i < results.length; i++) {
        let [start, end] = results[i];
        
        graph[start - 1][end - 1] = 1;
        graph[end - 1][start - 1] = -1;
    }
    
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph[i][k] === 1 && graph[k][j] === 1) {
                    graph[i][j] = 1;
                    graph[j][i] = -1;
                } else if (graph[i][k] === -1 && graph[k][j] === -1) {
                    graph[i][j] = -1;
                    graph[j][i] = 1;
                }
            }
        }
    }
    
    for (let playerScores of graph) {
        let cnt = playerScores.filter(score => !score).length;
        
        if (cnt === 1) answer++;
    } 
    
    return answer;
}