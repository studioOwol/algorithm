import sys
input = sys.stdin.readline

N = int(input())
maxDP = list(map(int, input().split()))
minDP = maxDP[:]

for _ in range(N-1):
    c1, c2, c3 = map(int, input().split())
    maxC1, maxC2, maxC3 = maxDP
    minC1, minC2, minC3 = minDP

    maxDP = [
        c1 + max(maxC1, maxC2),
        c2 + max(maxC1, maxC2, maxC3),
        c3 + max(maxC2, maxC3)
    ]

    minDP = [
        c1 + min(minC1, minC2),
        c2 + min(minC1, minC2, minC3),
        c3 + min(minC2, minC3)
    ]

print(max(maxDP), min(minDP))
