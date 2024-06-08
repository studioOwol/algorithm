function solution(numbers, hand) {
    let keyPad = {'1': [0, 0], '2': [0, 1], '3': [0, 2], '4': [1, 0], '5': [1, 1], '6': [1, 2], '7': [2, 0], '8': [2, 1], '9': [2, 2], '0': [3, 1]};
    let left = [3, 0];
    let right = [3, 2];
    let leftPad = [1, 4, 7];
    let rightPad = [3, 6, 9];
    let result = '';
    
    for (let num of numbers) {
        if (leftPad.includes(num)) {
            result += 'L'
            left = keyPad[num];
        } else if (rightPad.includes(num)) {
            result += 'R';
            right = keyPad[num];
        } else {
            let leftDiff = Math.abs(left[0] - keyPad[num][0]) + Math.abs(left[1] - keyPad[num][1]);
            let rightDiff = Math.abs(right[0] - keyPad[num][0]) + Math.abs(right[1] - keyPad[num][1]);
            
            if (leftDiff < rightDiff) {
                result += 'L';
                left = keyPad[num];
            } else if (leftDiff > rightDiff) {
                result += 'R';
                right = keyPad[num];
            } else {
                if (hand === 'left') {
                    result += 'L';
                    left = keyPad[num];
                } else {
                    result += 'R';
                    right = keyPad[num];
                }
            }
        }
    }
    
    return result;
}