from random import randrange

def randint(min="" , max="" ):
    if not isinstance(min, int) and not isinstance(max, int):
        return randrange(0, 100)
    if not isinstance(min, int) and isinstance(max, int):
        return randrange(0, max)
    if isinstance(min, int) and not isinstance(max, int):
        return randrange(min, 100)
    return randrange(min, max)

print(randint())
print(randint(max=50))
print(randint(min=50))
print(randint(min=50, max=500))