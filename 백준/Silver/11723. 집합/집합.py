import sys
input = sys.stdin.readline
m = int(input())
s = set()
for _ in range(m):
  arr = list(input().split())
  c = arr[0]
  if c == 'add':
    s.add(int(arr[1]))
  elif c == 'remove':
    try:
      s.remove(int(arr[1]))
    except:
      pass
  elif c == 'check':
    if int(arr[1]) in s:
        print(1)
    else:
      print(0)
  elif c == 'toggle':
    if int(arr[1]) in s:
      s.remove(int(arr[1]))
    else:
      s.add(int(arr[1]))
  elif c == 'all':
    s = set([i for i in range(1,21)])
  else:
    s = set()