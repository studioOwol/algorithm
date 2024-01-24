function solution(tickets) {
    let graph = {};
    let answer = [];

    for (const ticket of tickets) {
        const [start, end] = ticket;
        
        if(!graph[start]) {
            graph[start] = [];
        }
        
        graph[start].push(end);
        graph[start].sort();
    }
    
    function dfs(airport, path) {
        if (path.length === tickets.length + 1) {
            answer.push(path.slice());
            return;
        }
        
        if (graph[airport]) {
            for (let i = 0; i < graph[airport].length; i++) {
                const nextCity = graph[airport][i];
                graph[airport].splice(i, 1);
                dfs(nextCity, path.concat(nextCity));
                graph[airport].splice(i, 0, nextCity);
            }
        }
    };
    
    dfs('ICN', ['ICN']);
    
    return answer[0];
}