#----- update values in dictionaries and lists
x = [ [5,2,3], [10,8,9] ] 
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'}
    ]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
students[0]['last_name'] = 'Bryant'
sports_directory['soccer'][0] = 'Andres'
z[0]['y'] = 30

print(x)
print(students)
print(sports_directory)
print(z)

#----- Iterate Through a list of dictionaries
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary(students):
    for dic in students:
        print("first_name - " + dic['first_name'] + ", last_name - "+ dic['last_name'])

iterateDictionary(students)

# for key in mydic:
#   print "the key name is" + key + "and its value is" + mydic[key]

#----- Get Values From a list of Dictionaries
students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

def iterateDictionary2(key_name, student):
    for dic in students:
        print(dic[key_name])

iterateDictionary2('first_name', students)
iterateDictionary2('last_name', students)

#----- Iterate Through a dictionary with list values
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
# print(list(dojo.keys())[0])   #THE 'OBJECT IS NOT SUBSCRIPTABLE'
def printInfo(some_dict):
    first, second = list(dojo.keys())
    print(f"{len(some_dict.get(first))} {first.upper()}")
    for values in some_dict[first]:
        print(values)
    print()
    print(f"{len(some_dict.get(second))} {second.upper()}")
    for values in some_dict[second]:
        print(values)
    # for dic in some_dict:

printInfo(dojo)