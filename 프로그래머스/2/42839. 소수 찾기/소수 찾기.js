function solution(numbers) {
    const nums = numbers.split('');
    const set = [];
    
    const getCombinations = (arr, selected) => {
        if (selected.length > 0) {
            const number = Number(selected.join(''));
            if (isPrime(number) && !set.includes(number)) {
                set.push(number);
            }
        }
        
        for (let i = 0; i < arr.length; i++) {
            const rest = [...arr];
            const picked = rest.splice(i, 1);
            
            getCombinations(rest, [...selected, ...picked]);
        }
    };
    
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        
        return true;
    };
    
    getCombinations(nums, []);
    
    return set.length;
}

