let pillars, beams, N;

function solution(n, build_frame) {
    N = n;
    pillars = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
    beams = Array.from({ length: n + 1 }, () => Array(n + 1).fill(false));
    let result = [];

    for (let frame of build_frame) {
        let [x, y, kind, isInstall] = frame;

        if (isInstall === 1) {
            if (kind === 0 && canInstallPillar(x, y)) {
                pillars[x][y] = true;
            }
            if (kind === 1 && canInstallBeam(x, y)) {
                beams[x][y] = true;
            }
        } else {
            if (kind === 0) {
                pillars[x][y] = false;
                if (!canRemain()) {
                    pillars[x][y] = true; // 되돌리기
                }
            }
            if (kind === 1) {
                beams[x][y] = false;
                if (!canRemain()) {
                    beams[x][y] = true; // 되돌리기
                }
            }
        }
    }

    for (let x = 0; x <= n; x++) {
        for (let y = 0; y <= n; y++) {
            if (pillars[x][y]) {
                result.push([x, y, 0]);
            }
            if (beams[x][y]) {
                result.push([x, y, 1]);
            }
        }
    }

    result.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return a[2] - b[2];
    });

    return result;
}

function canInstallPillar(x, y) {
    return y === 0 || (y > 0 && pillars[x][y - 1]) || (x > 0 && beams[x - 1][y]) || beams[x][y];
}

function canInstallBeam(x, y) {
    return (y > 0 && pillars[x][y - 1]) || (y > 0 && pillars[x + 1][y - 1]) || (x > 0 && beams[x - 1][y] && beams[x + 1][y]);
}

function canRemain() {
    for (let x = 0; x <= N; x++) {
        for (let y = 0; y <= N; y++) {
            if (pillars[x][y] && !canInstallPillar(x, y)) return false;
            if (beams[x][y] && !canInstallBeam(x, y)) return false;
        }
    }
    return true;
}
