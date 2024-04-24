function solution(cacheSize, cities) {
    let cache = [];
    let totalTime = 0;

    for (let city of cities) {
        city = city.toLowerCase();
        
        let idx = cache.indexOf(city);

        if (idx !== -1) {
            totalTime += 1;
            cache.splice(idx, 1);
            cache.push(city);
        } else {
            // Cache Miss: 실행 시간 5
            totalTime += 5;
            if (cache.length >= cacheSize && cacheSize > 0) {
                // 캐시가 가득 차있으면 맨 앞의 도시를 제거
                cache.shift();
            }
            
            if (cacheSize > 0) {
                cache.push(city);
            }
        }
    }

    return totalTime;
}