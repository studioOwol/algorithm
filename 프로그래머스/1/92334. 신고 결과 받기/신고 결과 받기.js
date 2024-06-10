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
    
    let banned = Object.keys(reportMap).filter(v => reportMap[v] >= k);
    
    return id_list.map(id => {
        let cnt = userMap[id].filter(v => banned.includes(v)).length;
        
        return cnt;
    });
}