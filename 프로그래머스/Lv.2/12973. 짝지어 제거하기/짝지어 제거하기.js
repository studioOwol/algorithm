function solution(s)
{   
    const result = [];
    
    for (let chr of s) {
        if (result.length === 0) result.push(chr);
        else if (result[result.length-1] === chr) result.pop();
        else result.push(chr);
    }
    
    return result.length == 0 ? 1 : 0
}