function solution(answers) {
    let answer = [];
    
    let u1 = [1, 2, 3, 4, 5];
    let u2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let u3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let cnt1 = answers.filter((num, idx) => num === u1[idx % u1.length]).length;
    let cnt2 = answers.filter((num, idx) => num === u2[idx % u2.length]).length;
    let cnt3 = answers.filter((num, idx) => num === u3[idx % u3.length]).length;
    
    let maxCnt = Math.max(cnt1, cnt2, cnt3);
    
    if (cnt1 === maxCnt) answer.push(1);
    if (cnt2 === maxCnt) answer.push(2);
    if (cnt3 === maxCnt) answer.push(3);
    
    return answer;
}