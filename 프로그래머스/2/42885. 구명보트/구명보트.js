function solution(people, limit) {
    let cnt = 0;
    let left = 0;
    let right = people.length - 1;
    
    people.sort((a, b) => a - b);

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