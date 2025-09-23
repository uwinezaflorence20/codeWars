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
