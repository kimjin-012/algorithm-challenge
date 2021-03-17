# List and loops
#1
numbers = list(range(151))
print(numbers)

#2
multiples = list(range(5,1001))[::5]
print(multiples)

#3
counts = []
for i in range(1,101):
    if (i%5 == 0):
        counts.append("Coding")
        continue
    if (i%10 == 0):
        counts.append("Coding Dojo")
        continue
    counts.append(i)

#4
sucker = sum(range(500001))
print(sucker)

#5
print(sorted(list(num for num in range(0, 2019, 4)), reverse = True))

#6
lowNum = 2
highNum = 5
mult = 3
print(sorted([lowNum, highNum, mult]))
