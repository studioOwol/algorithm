function solution(numbers, target) {
    let result = 0;
    
    const dfs = (cnt, acc) => {
        if (cnt < numbers.length) {
            dfs(cnt + 1, acc + numbers[cnt]);
            dfs(cnt + 1, acc - numbers[cnt]);
        } else {
            if (acc === target) {
                result++;
            }
        }
    }
    
    dfs(0, 0);
    
    return result;
}