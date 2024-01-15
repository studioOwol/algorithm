function solution(numbers, target) {
    const dfs = (cnt, nums, target) => {
        let result = 0;
        
        if (cnt === nums.length) {
            if (nums.reduce((acc, value) => acc + value, 0) === target) {
                return 1;
            } else {
                return 0;
            }
        } else {
            result += dfs(cnt + 1, nums, target);
            nums[cnt] *= -1;
            result += dfs(cnt + 1, nums, target);
            return result;
        }
    }
    
    return dfs(0, numbers, target);
}