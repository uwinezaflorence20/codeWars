def called(name):
    print(f"hello uwineza {name}")

# call the function
called("Florence")



def calculate_area(length, width):
    area = length * width
    return area   # return the result instead of just calculating

print(calculate_area(10, 20))


def even_odd(number):

    if number % 2 == 0:
        print("odd number")
    
    else:
        print("even number")

even_odd(10)
even_odd(7)


# set,list

fruits = ["Mango", "Banana", "Apple", "Orange"]
print(fruits[1])

favorite_book = {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction"
}
print(favorite_book.get("genre"))

import random
numbers = [random.randint(1, 10) for _ in range(15)]
unique_numbers = set(numbers)
print(unique_numbers)

#  math function

import math_function

result = math_functions.add(5, 3)
print(result)