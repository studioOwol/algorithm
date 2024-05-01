function solution(n) {
    let binN = n.toString(2)
    let nOneCnt = (binN.match(/1/g) || []).length;
    
    for (let i = n + 1; i <= 1000000; i++) {
        let binX = i.toString(2);
        let xOneCnt = (binX.match(/1/g) || []).length;
        
        if (nOneCnt === xOneCnt) {
            return i;
        }
    }
}