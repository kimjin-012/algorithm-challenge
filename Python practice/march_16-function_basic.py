# Python function basic
#----- 1
def countdown(number):
    downlist = sorted([num for num in range(number)],reverse=True)
    return downlist

print(countdown(5))

#----- print and return
def printandreturn(list):
    print(list[0])
    return list[1]
    
printandreturn([1,2])

#----- first plus length
def firstpluslength(alist):
    return alist[0] + len(alist)

print(firstpluslength([1,2,3,4,5]))

#----- values greater than second
def valuesgreaterthansecond(alist):
    if len(alist) < 2:
        return False
    return [num for num in alist if num > alist[1]]

print(valuesgreaterthansecond([5,2,3,2,1,4]))

#----- this length, that value
def thislengththatvalue(one, two):
    newlist = []
    for count in range(one):
        newlist.append(two)
    return newlist

print(thislengththatvalue(4,7))
print(thislengththatvalue(6,2))