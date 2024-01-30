function solution(clothes) {
    let map = {};
    let answer = 1;
    
    clothes.forEach(([name, kind]) => {
        if (!map[kind]) {
            map[kind] = 0;
        }
        
        map[kind] += 1;
    });
    
    for (let cnt of Object.values(map)) {
        answer *= (cnt + 1);
    }
    
    return answer - 1;
}