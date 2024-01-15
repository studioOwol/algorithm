function solution(numbers, target) {
    let result = 0;

    const dfs = (cnt, nums, target) => {
        if (cnt !== nums.length) {
            dfs(cnt + 1, nums, target);
            nums[cnt] *= -1;
            dfs(cnt + 1, nums, target);
        } else {
            if (nums.reduce((acc, value) => acc + value, 0) === target) {
                result++;
            }
        }
    }

    dfs(0, numbers, target);

    return result;
}
