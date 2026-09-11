// 1️⃣ let and const
let studentName = "Alice";
const university = "University of Rwanda";
let course = "Software Engineering";

// 2️⃣ Object literal shorthand
const studentInfo = { studentName, university, course };

// 3️⃣ Array of hobbies
const hobbies = ["reading", "coding", "gaming", "cycling"];

// 4️⃣ Array destructuring (pick first 3 hobbies)
const [hobby1, hobby2, hobby3] = hobbies;

// 5️⃣ Object destructuring
const { studentName: name, course: major } = studentInfo;

// 6️⃣ Template literals
const profileCard = `
Student Profile:
Name: ${name}
University: ${university}
Course: ${major}
Hobbies:
1. ${hobby1}
2. ${hobby2}
3. ${hobby3}
`;

console.log(profileCard);
