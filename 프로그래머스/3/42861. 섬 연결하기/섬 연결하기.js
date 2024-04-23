function solution(n, costs) {
    let parents = Array.from({length: n + 1}, (_, idx) => idx);
    let minCost = 0;
    
    // 가중치 기준으로 오름차순 정렬
    costs.sort((a, b) => a[2] - b[2]);
    
    costs.forEach((edge) => {
        let [start, end, cost] = edge;
        
        if (union(start, end)) {
            minCost += cost;
        }
    });
    
    return minCost;
    
    // 부모 노드를 찾는 함수
    function find(node) {
        if (node === parents[node]) {
            return node;
        }
        
        return find(parents[node]);
    }
    
    // 부모 노드가 다르면 작은 값의 노드를 부모 노드로 갱신 => 트리를 합침
    function union(node1, node2) {
        node1 = find(node1);
        node2 = find(node2);
        
        if (node1 < node2) {
            parents[node2] = node1;
            return true;
        }
        
        if (node2 < node1) {
            parents[node1] = node2;
            return true;
        }
        
        return false
    }
}