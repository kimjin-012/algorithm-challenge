# Python insertion sort
def insertionsort(alist):
    for num in range(len(alist)):
        print(f'beginning - {alist[num]}')
        # check = alist[num]
        for count in range(num):
            print(alist[num - count], alist[num])
            if alist[num - count] < alist[num - count - 1]:
                # print(alist[num], alist[num - count])
                alist[num - count], alist[num - count - 1] = alist[num - count -1], alist[num - count]
    return alist

print(insertionsort([0,1,4,2,7,3,5,9,8,6]))
