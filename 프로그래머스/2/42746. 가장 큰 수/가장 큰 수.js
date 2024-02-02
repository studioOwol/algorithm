function solution(numbers) {
    let sortedNums = numbers.map(number => String(number)).sort((a, b) => (b + a) - (a + b))
    
    return sortedNums[0] === '0' ? '0' : sortedNums.join('');
}