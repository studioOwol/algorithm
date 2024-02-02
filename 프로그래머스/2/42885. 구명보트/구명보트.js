function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let left = 0;
    let right = people.length - 1;
    let cnt = 0;
    
    while (left <= right) {
        cnt++;
        
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else {
            right--;
        }
    }

    return cnt;
}