function solution(arrayA, arrayB) {
    arrayA = [...new Set(arrayA)];
    arrayB = [...new Set(arrayB)];
    
    let gcdA = arrayA[0];
    let gcdB = arrayB[0];
    
    for (let i = 1; i < arrayA.length; i++) {
        gcdA = getGCD(gcdA, arrayA[i]);
    }
    
    for (let i = 1; i < arrayB.length; i++) {
        gcdB = getGCD(gcdB, arrayB[i]);
    }
    
    for (let i = 0; i < arrayB.length; i++) {
        if (arrayB[i] % gcdA === 0) {
            gcdA = 0;
            break;
        }
    }
    
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] % gcdB === 0) {
            gcdB = 0;
            break;
        }
    }
    
    return Math.max(gcdA, gcdB);
}

function getGCD(a, b) {
    if (b === 0) {
        return a;
    } else {
        return getGCD(b, a % b);
    }
}

