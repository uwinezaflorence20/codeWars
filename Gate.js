// Edge Case 1
const person = { name: 'John', age: 30 };
const { name, age, profession = 'Unknown' } = person;
console.log(name); //john
console.log(age); //30
console.log(profession); //unknown

// Edge Case 2
const user = {id: 101,personalInfo: { name: 'Alice',age: 25,},posts: ['Post 1', 'Post 2']};

const {personalInfo: { name: userName, age: userAge },posts: [firstPost, secondPost]} = user;

console.log(userName);//alice
console.log(userAge); //25
console.log(firstPost); //post1
console.log(secondPost); //post2

// Edge Case 3
const data = { prop1: 'Value 1', prop2: 'Value 2' };
const { prop1, prop2: renamedProp2 } = data;
console.log(prop1);//value1
console.log(renamedProp2); //value2

// Edge Case 4
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); //1
console.log(second); //2
console.log(rest); //[3,4,5]