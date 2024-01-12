function solution(n, k) {
    let answer = [];
    let fact = 0;
    const people = Array.from({length: n}, (_, idx) => idx + 1);
    
    const factorial = n => {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
    
    while(n !== 0) {
        fact = factorial(n - 1);
        answer.push(people.splice(Math.floor((k -1) / fact), 1)[0]);
        n--;
        k %= fact;
    }
    
    return answer;
}