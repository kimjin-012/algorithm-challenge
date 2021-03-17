# python version of Selection Sort
def selectionsort(alist):
    x = sorted(alist)
    return x

print(selectionsort([0,1,4,2,7,3,5,9,8,6]))

# test = [0,1,4,2,7,3,5,9,8,6]
# test.sort()
# print(test)

#another way
def selectionsort2(alist):
    count = 0
    for n in range(len(alist)):
        count += 1
        if count == len(alist):
            break
        if alist[n] > alist[n+1]:
            alist[n], alist[n+1] = alist[n+1], alist[n]
        else:
            continue
    return alist

print(selectionsort2([0,1,4,2,7,3,5,9,8,6]))