# Loop basic second
#----- biggie size
# def biggiesize(alist):
#     for num in alist:
#         if num > 0:
#             num = "big"
#     return alist

# print(biggiesize([-1, 3, 5, -5]))
def biggiesize(alist):
    for num in range(len(alist)):
        if alist[num] > 0:
            alist[num] = "big"
    return alist

print(biggiesize([-1, 3, 5, -5]))

#----- count positives
def countpositives(alist):
    count = 0
    for num in alist:
        if num > 0:
            count += 1
            # last = num
    alist[-1] = count
    return alist

print(countpositives([-1,1,1,1]))
print(countpositives([1,6,-4,-2,-7,-2]))

#----- sum total
def sumtotal(alist):
    return sum(alist)

print(sumtotal([1,2,3,4]))
print(sumtotal([6,3,-2]))

#----- average
def average(alist):
    return sum(alist)/len(alist)

print(average([1,2,3,4]))

#----- length
def length(alist):
    return len(alist)

print(length([37,2,1,-9]))
print(length([]))

#----- minimum
def minimum(alist):
    if len(alist) == 0:
        return False
    return min(alist)

print(minimum([37,2,1,-9]))
print(minimum([]))

#----- maximum
def maximum(alist):
    if len(alist) == 0:
        return False
    return max(alist)

print(maximum([37,2,1,-9]))
print(maximum([]))

#----- ultimate analysis
def ultimateanalysis(alist):
    sumTotal = sum(alist)
    average = sum(alist)/len(alist)
    minimum = min(alist)
    maximum = max(alist)
    length = len(alist)
    return dict(sumTotal = sumTotal, average = average, minimum = minimum, maximum = maximum, length = length)

print(ultimateanalysis([37,2,1,-9]))

#----- reverse list
def reverselist(alist):
    return alist[::-1]
    # return list(reversed(alist))
    # return alist.reverse()

print(reverselist([37,2,1,-9]))