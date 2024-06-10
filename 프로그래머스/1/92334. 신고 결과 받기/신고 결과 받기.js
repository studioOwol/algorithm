function solution(id_list, report, k) {
    report = [...new Set(report)];
    let reportMap = {};
    let userMap = {};
    
    id_list.forEach((id) => {
        reportMap[id] = 0;
        userMap[id] = [];
    });
    
    for (let r of report) {
        let [a, b] = r.split(' ');
        
        userMap[a].push(b);
        reportMap[b]++;
    }
    
    let disabled = Object.keys(reportMap).filter(v => reportMap[v] >= k);
    
    let answer = id_list.map(id => {
        let cnt = userMap[id].filter(v => disabled.includes(v)).length;
        
        return cnt;
    });
    
    return answer;
}