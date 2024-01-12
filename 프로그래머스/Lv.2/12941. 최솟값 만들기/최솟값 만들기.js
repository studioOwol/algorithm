function solution(A, B) {
    const sortedA = [...A].sort((a, b) => a - b);
    const sortedB = [...B].sort((a, b) => b - a);

    return sortedA.reduce((acc, _, idx) => acc + sortedA[idx] * sortedB[idx], 0);
}