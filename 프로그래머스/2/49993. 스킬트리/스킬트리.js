function solution(skill, skill_trees) {
    let cnt = 0;
    
    skill_trees.forEach(tree => {
        let result = '';
        
        for(const str of tree) {
            if (skill.includes(str)) {
               result += str;
            }
        }
        
        if (skill.slice(0, result.length) === result) {
            cnt++;
        }
    });
    
    return cnt;
}