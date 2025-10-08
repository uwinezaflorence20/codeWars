class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display_info(self):
        print(f"Student Name: {self.name}")
        print(f"Student Age: {self.age}")

# Example usage:
student1 = Student("Alice", 20)
student1.display_info()



class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def total_value(self):
        return self.price * self.quantity

# Example usage:
product1 = Product("Laptop", 1200, 5)
print(f"Total value of {product1.name} in stock: ${product1.total_value()}")


try:
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    result = num1 / num2
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")
else:
    print(f"The result is: {result}")



    filename = input("Enter the filename to read: ")

try:
    with open(filename, "r") as file:
        data = file.read()
except FileNotFoundError:
    print(f"Error: The file '{filename}' does not exist!")
else:
    print("File content:")
    print(data)


