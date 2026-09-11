class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        print(f"Person object created for {self.name}, age {self.age}")

    def __del__(self):
        print(f"Goodbye {self.name}, your object is being deleted.")


# Example usage
p1 = Person("Florence", 22)
del p1  # triggers __del__
