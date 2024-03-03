import heapq
input = __import__('sys').stdin.readline
for _ in range(int(input())):
    n = int(input())
    visited = [False for _ in range(n)]
    max_heap, min_heap = [],[]
    for i in range(n):
        command = input()
        if command.startswith('I'):
            heapq.heappush(max_heap,(-int(command.split()[1]),i))
            heapq.heappush(min_heap,(int(command.split()[1]),i))
            visited[i] = True
        else:
            if command.split()[1]=='1':
                while max_heap and not visited[max_heap[0][1]]:
                    heapq.heappop(max_heap)
                if max_heap:
                    visited[max_heap[0][1]] = False
                    heapq.heappop(max_heap)
            else:
                while min_heap and not visited[min_heap[0][1]]:
                    heapq.heappop(min_heap)
                if min_heap:
                    visited[min_heap[0][1]] = False
                    heapq.heappop(min_heap)
    while min_heap and not visited[min_heap[0][1]]:heapq.heappop(min_heap)
    while max_heap and not visited[max_heap[0][1]]:heapq.heappop(max_heap)
    if max_heap and min_heap:print(-max_heap[0][0],min_heap[0][0])
    else:print("EMPTY")