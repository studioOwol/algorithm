function solution(s) {
    s = s.replaceAll('{', "").replaceAll('}',"").split(',');
    let map = {};
    
    for (let num of s) {
        map[num] = (map[num] || 0) + 1;
    }
    
    return Object.keys(map).sort((a, b) => map[b] - map[a]).map(Number);
}

// 튜플 - 중복된 원소 있을 수 있음, 원소 순서 있음, 순서 다르면 서로 다른 튜플, 원소 개수는 유한함
// 중복되는 원소가 없는 튜플 = 집합 {} 표현, 집합은 순서가 바뀌어도 같은 튜플을 나타냄
// 집합 = 문자열 s, s가 표현하는 튜플을 배열에 담아 반환
// 5 <= s.length <= 1,000,000 = 10^6
// 아이디어
// 1. 문자열 s를 배열로 변환하기 > Map
// 2. 집합 원소의 각 숫자를 키값으로 개수 세기
// 3. Map의 밸류(개수)가 큰 순서대로 키값을 result에 담기