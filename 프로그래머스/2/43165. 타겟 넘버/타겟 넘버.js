function solution(numbers, target) {
    let answer = 0;
    
    function dfs(index, acc) {
        if (index === numbers.length) {
            if (acc === target) {
                answer++;
            }
            return;
        }
        
        dfs(index + 1, acc + numbers[index]);
        dfs(index + 1, acc - numbers[index]);
    }
    
    dfs(0, 0);
    
    return answer;
}