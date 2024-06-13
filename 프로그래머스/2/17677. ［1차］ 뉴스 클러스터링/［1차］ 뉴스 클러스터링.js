function solution(str1, str2) {
     const bigrams1 = getBigrams(str1);
    const bigrams2 = getBigrams(str2);

    const map1 = new Map();
    bigrams1.forEach(bigram => map1.set(bigram, (map1.get(bigram) || 0) + 1));

    const map2 = new Map();
    bigrams2.forEach(bigram => map2.set(bigram, (map2.get(bigram) || 0) + 1));

    let intersectionSize = 0;
    for (const [bigram, count] of map1.entries()) {
        if (map2.has(bigram)) {
            intersectionSize += Math.min(count, map2.get(bigram));
        }
    }

    let unionSize = 0;
    for (const [bigram, count] of map1.entries()) {
        unionSize += count;
    }
    for (const [bigram, count] of map2.entries()) {
        unionSize += count;
    }
    unionSize -= intersectionSize;

    const similarity = unionSize === 0 ? 1 : intersectionSize / unionSize;
    return Math.floor(similarity * 65536);
}

function getBigrams(str) {
    const bigrams = [];
    const lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length - 1; i++) {
        const bigram = lowerStr.slice(i, i + 2);
        if (/^[a-z]{2}$/.test(bigram)) { 
            bigrams.push(bigram);
        }
    }
    return bigrams;
}