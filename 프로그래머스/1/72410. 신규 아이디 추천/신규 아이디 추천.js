function solution(new_id) {
    // 1단계
    new_id = new_id.toLowerCase();
    
    // 2단계
    let arr = new_id.split('');
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '-' && arr[i] !== '_' && arr[i] !== '.' && !/[0-9]/.test(arr[i]) && !/[a-z]/.test(arr[i])) {
            arr[i] = '';
        } 
    }
    
    new_id = arr.join('');
    
    // 3단계
    while (new_id.includes('..')) {
        new_id = new_id.replaceAll('..', '.');
    }
    
    // 4단계, 5단계
    if (new_id.length > 0 && new_id[0] === '.') {
        if (new_id.length === 1) {
            new_id = 'a';
        } else {
            new_id = new_id.slice(1);
        }
    }
    
    if (new_id[new_id.length - 1] === '.') {
        new_id = new_id.slice(0, new_id.length - 1);
    }
    
    // 6단계
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
    }
    if (new_id[new_id.length - 1] === '.') {
        new_id = new_id.slice(0, new_id.length - 1);
    }
    
    // 7단계
    if (new_id.length <= 2) {
        new_id = new_id.padEnd(3, new_id[new_id.length - 1]);
    }
    
    return new_id;
}