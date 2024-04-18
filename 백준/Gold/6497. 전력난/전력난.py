import sys

input = sys.stdin.readline

#유니온 파인드 알고리즘을 통해 부모 노드를 통일
def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]


def union(x, y):
    x, y = find(x), find(y)
    if x < y:
        parent[y] = x
    else:
        parent[x] = y


while True:
    m, n = map(int, input().split())
    if m == 0 and n == 0: #0이 2개 주어질 경우 종료합니다.
        break
    parent = [i for i in range(m)]
    cost = 0
    # edges = [list(map(int, input().strip().split())) for _ in range(n)] 아래와 같은 동작을 수행합니다.
    edges = []
    for _ in range(n):
        u, v, w = map(int, input().split()) #출발점, 도착점, 간선의 가중치
        edges.append((u, v, w))
    edges.sort(key=lambda x: x[2]) #가중치를 중심으로 오름차순으로 정렬해줍니다.

    for edge in edges:
        u, v, w = edge
        if find(u) != find(v): #유니온 파인드로 부모 노드가 같은지 보고, 아니라면 통일해줍니다.
            union(u, v)
        else: #문제에서 원하는 것이 절약되는 액수이므로, 연결되지 않은 간선의 가중치를 더해줍니다.
            cost += w
    print(cost)