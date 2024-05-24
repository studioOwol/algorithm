let M;
let N;
let locks;
let keys;
let result = false;
 
function solution(key, lock) {
    locks = lock;
    keys = key;
    M = keys.length;
    N = locks.length;
    
    for (let r = 0; r < 4; r++) {
        rotateKey();
        moveKey();
        
        if (result) {
            break;
        }
    }
    
    return result;
}

// 자물쇠 크기를 기준으로 키 움직이기
function moveKey() {
    for (let moveR = 1; moveR < N * 2; moveR++) {
        for (let moveC = 1; moveC < N * 2; moveC++) {
            if (isOpen(moveR, moveC)) {
                result = true;
                return;
            }
        }
    }
}

// 자물쇠가 열리는지 확인하기
function isOpen(moveR, moveC) {
    let locksCopy = locks.map(v => v.slice());
    
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            let keyR = (M - moveR) + r;
            let keyC = (M - moveC) + c;
            
            if (!(0 <= keyR && keyR < M && 0 <= keyC && keyC < M)){
                continue;
            }
            
            if (keys[keyR][keyC] === 1) {
                locksCopy[r][c]++;
            }
        }
    }

    for (let r = 0; r < N; r++) {
        for(let c = 0; c < N; c++) {
            if (locksCopy[r][c] !== 1) {
                return false;
            }
        }
    }
    
    return true;
}

function rotateKey() {
    let rotated = Array.from({ length: M }, () => Array(M).fill(0));
    
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < M; j++) {
            rotated[j][M - 1 - i] = keys[i][j];
        }
    }
    
    keys = rotated;
}

