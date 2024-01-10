function solution(files) {
    let sortedFiles = files.map(file => {
        let head = '';
        let num = '';
        let tail = '';
        let flag = false;

        for (let i = 0; i < file.length; i++) {
            if (!isNaN(parseInt(file[i]))) {
                num += file[i];
                flag = true;
            } else if (!flag) {
                head += file[i];
            } else {
                tail = file.slice(i);
                break;
            }
        }

        return { head, num, tail };
    });

    sortedFiles.sort((a, b) => {
        const compareHead = a.head.toLowerCase().localeCompare(b.head.toLowerCase());
        const compareNum = parseInt(a.num) - parseInt(b.num);

        return compareHead || compareNum;
    });

    let result = sortedFiles.map(file => file.head + file.num + file.tail);
    
    console.log(result)

    return result;
}