function solution(files) {
    const sortedFiles = files.sort((a, b) => {
        const regex = /\d+/;
        const aNum = parseInt(a.match(regex)[0]);
        const bNum = parseInt(b.match(regex)[0]);

        const aHead = a.split(regex)[0].toLowerCase();
        const bHead = b.split(regex)[0].toLowerCase();

        return aHead.localeCompare(bHead) || aNum - bNum;
    });

    return sortedFiles;
}