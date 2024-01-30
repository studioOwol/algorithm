function solution(nums) {
    let choice = nums.length / 2;
    let kind = [...new Set(nums)];
    
    if (kind.length > choice) return choice;
    
    return kind.length;
    
}