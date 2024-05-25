function solution(cacheSize, cities) {
    let cache = [];
    let time = 0;
    
    if (!cacheSize) return cities.length * 5;
    
    for (let city of cities) {
        city = city.toLowerCase();
        
        if (!cache.length) {
            cache.push(city);
            time += 5;
            continue;
        }
        
        if (0 < cache.length && cache.length < cacheSize)  {
            if (cache.includes(city)) {
                cache.splice(cache.indexOf(city), 1);
                time += 1;
                cache.push(city);
            } else {
                cache.push(city);
                time += 5;
            }
        } else {
            if (cache.includes(city)) {
                cache.splice(cache.indexOf(city), 1);
                time += 1;
                cache.push(city);
            } else {
                cache.shift();
                cache.push(city);
                time += 5;
            }
        }
    }
    
    return time;
}