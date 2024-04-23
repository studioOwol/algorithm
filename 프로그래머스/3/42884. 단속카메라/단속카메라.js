function solution(routes) {
    let result = 1;
    
    // 진입 시점을 기준으로 오름차순 정렬
    routes.sort((a, b) => a[0] - b[0])
    
    // 첫 진출시점은 첫 차량의 진출시점으로 초기화
    let out = routes[0][1];
    
    for(let i = 1; i < routes.length; i++) {
        // 진출시점보다 현재 차량의 진입이 느리면 카메라 추가 설치 & 진출시점 갱신
        if (out < routes[i][0]) {
            result++;
            out = routes[i][1];
        }
        
        // 진출시점이 현재 차량의 진출시점보다 크다면 항상 out을 갱신해야 다음 차량 카메라 설치 여부 판별 가능
        if (out > routes[i][1]) {
            out = routes[i][1];
        }
    }
    
    return result;
}