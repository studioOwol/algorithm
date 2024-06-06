let aMap = {};
let bMap = {};
let aList = [];
let bList = [];
let set;

function solution(str1, str2) {
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();
    
    for (let i = 0; i < a.length; i++) {
        let str = a.slice(i, i + 2)
        
        if (/^[a-zA-Z]+$/.test(str) && str.length > 1) {
            aList.push(str);
          
            if(!aMap[str]) {
                aMap[str] = 0;
            }
            
            aMap[str] += 1;
        }
    }
    
    for (let i = 0; i < b.length; i++) {
        let str = b.slice(i, i + 2)
        
        if (/^[a-zA-Z]+$/.test(str) && str.length > 1) {
            bList.push(str);
            
            if (!bMap[str]) {
                bMap[str] = 0;
            }
        
            bMap[str] += 1;
        }
    }
    
    set = [...new Set([...aList, ...bList])];
    
    return getResult();
}

function getResult() {
    let union = 0;
    let intersec = 0;
    
    for (let str of set) {
        let aCnt = 0;
        let bCnt = 0;
        
        
        if (aMap[str]) {
            aCnt = aMap[str];
        }
        
        if (bMap[str]) {
            bCnt = bMap[str];
        }
        
        intersec += Math.min(aCnt, bCnt);
        union += Math.max(aCnt, bCnt);
    }
    
    if (!union) {
        return 65536
    }
    
    return Math.floor((intersec / union) * 65536)
}

