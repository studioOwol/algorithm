function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    
    let answer = 1;
    let cameraPos = routes[0][1];
    
    for (let [start, end] of routes.slice(1)) {
        if (cameraPos < start) {
            cameraPos = end;
            answer++;
        }
    }
    
    return answer;
}