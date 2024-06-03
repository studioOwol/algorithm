let result = 0;

function solution(n, times) {
    times.sort((a, b) => a - b);
    let left = times[0];
    let right = times[times.length - 1] * n;
    
    binarySearch(times, n, left, right)
    
    return result;
}

function binarySearch(arr, target, left, right) {
    let mid = 0;
    let cnt;
   
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        cnt = 0;
        
        for (let i = 0; i < arr.length; i++) {
            cnt += Math.floor(mid / arr[i]);
        }
        
        if (cnt >= target) {
            result = mid;
            right = mid;
        } else {
            left = mid + 1;
        }
    }
}