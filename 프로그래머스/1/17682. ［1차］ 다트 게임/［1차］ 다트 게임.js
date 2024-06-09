function solution(dartResult) {
    dartResult = dartResult.replaceAll('10', 'A');
    let area = ['S', 'D', 'T'];
    let cnt = 0;
    let answer = [];
    
    // 초기 시작 값이 'A'라면 10으로 시작
    if (dartResult[0] === 'A') {
        cnt = 10;
    } else { // 아니면 숫자로 시작
        cnt = Number(dartResult[0]);
    }
    
    for (let i = 1; i < dartResult.length; i++) {
        let char = dartResult[i];
        
        // S, D, T라면
        if (area.includes(char)) {
            // 숫자에 S, D, T의 인덱스 + 1만큼 제곱
            cnt = Math.pow(cnt, area.indexOf(char) + 1);
        } else if (char === '*') {
            // 현재 숫자를 두 배해주고 이전에 숫자가 있다면 이전 숫자도 두 배 해준다.
            cnt *= 2;
            
            if (answer.length !== 0) {
                answer[answer.length - 1] *= 2;
            }
        } else if (char === '#') {
            // 현재 숫자를 - 해준다.
            cnt = -cnt;
        } else {
            // 그 외 문자는 숫자로 게임 한 턴이 끝난 것
            answer.push(cnt);
            
            // cnt를 다음 게임의 시작 값으로 초기화
            if (char === 'A') {
                char = 10;
            }
            
            cnt = Number(char);
        }
    }
    
    // 마지막 게임 점수 추가
    answer.push(cnt);
    
    return answer.reduce((acc, v) => acc + v, 0);
}