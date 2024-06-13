function solution(str1, str2) {
    const getMultiSet = (str) => {
        const set = new Map();
        for (let i = 1; i < str.length; i++) {
            const word = str.slice(i - 1, i + 1).toLowerCase();
            if (!word.match(/^[a-z]{2}$/)) continue;
            set.set(word, (set.get(word) || 0) + 1);
        }
        return set;
    };

    const set1 = getMultiSet(str1);
    const set2 = getMultiSet(str2);

    const intersection = new Map();
    const union = new Map(set1);
    for (const [word, count] of set2) {
        const minCount = Math.min(count, set1.get(word) || 0);
        if (minCount > 0) intersection.set(word, minCount);
        union.set(word, Math.max(count, union.get(word) || 0));
    }

    const intersectionSize = [...intersection.values()].reduce((a, b) => a + b, 0);
    const unionSize = [...union.values()].reduce((a, b) => a + b, 0);

    return unionSize === 0 ? 65536 : Math.floor(intersectionSize / unionSize * 65536);
}
