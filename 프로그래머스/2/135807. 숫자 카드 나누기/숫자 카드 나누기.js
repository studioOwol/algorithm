function solution(arrayA, arrayB) {
    const aResult = getAnswer(arrayA, arrayB)
    const bResult = getAnswer(arrayB, arrayA)

    return aResult > bResult ? aResult : bResult
}

function getAnswer (A, B) {
    A.sort((a, b) => a - b)
    for (let i = A[0]; i > 1; i--) {
        if (A.every(a => a % i === 0) && !B.some(b => b % i === 0)) return i
    }
    return 0
}