function solution(cacheSize, cities) {
    let cache = [];
    let time = 0;
    
    for (let city of cities) {
        city = city.toLowerCase();
        
        let idx = cache.indexOf(city);
        
        if (idx !== -1) {
            // Cache hit
            cache.splice(idx, 1);
            cache.push(city);
            time += 1;
        } else {
            // Cache miss
            if (cacheSize === cache.length && cacheSize > 0) {
                cache.shift();
            }
            
            if (cacheSize > 0) {
                cache.push(city);
            }
            
            time += 5;
        }
    }
    
    return time;
}