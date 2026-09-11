let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

let isActive = spaceship['Active Mission'];
console.log(isActive , 'Active Mission' );

//function as the method in the object
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat(){
    console.log(retreatMessage);
  },
  takeOff(){
    console.log("Spim... Borp... Glix... Blastoff!")
  }
}
alienShip.retreat();
alienShip.takeOff();


// arrays and other object
let spaceship2 = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { 
        console.log('We got this!') 
        },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] 
     }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];
spaceship.passengers = [
  {
    name1:'uwineza',
    class:1
  },
  {
      name1:'uwineza',
    class:2
  }
];

let firstPassenger = spaceship.passengers[0];
console.log(firstPassenger.name1);


//
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = "avocado oil";
};

let remotelyDisable =(obj)=>{
obj.disabled = true
}
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);


let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 

// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for(let crewMember in spaceship.crew){
  console.log(`${crewMember}`+":" + `${spaceship.crew[crewMember].name}`);
}
for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}


// question with chatgpt and revision

let student = {
    name : 'Uwineza',
    age: 10,
    grade: 'A',
   
}
console.log(student.name);
console.log(student['name']);
student.school = "UR-CST";
console.log(student);
student.grade="A+";
delete student.age;

// intermediate
 let car ={
    brand:'Toyota',
    model:'Corolla',
    describe(){
        console.log(`This car is a ${this.brand} ${this.model}`);
    },

    updateModel(newModel){
    this.model= newModel;
    }
 };

 let obj2 = addFeature(car,"color","yello");
 car.updateModel("Yaris");
 console.log(car);

function createPerson(name,age,city){
return person = {
  name:name,
  age:age,
  city:city
}
}
let person1 = createPerson("uwineza",20,"kigali");
console.log(person1);
 
function getTopStudent(classroomObj) {
  let topStudent = classroomObj.students[0]; // start with the first student
console.log(topStudent);
  for (let i = 1; i < classroomObj.students.length; i++) {
    if (classroomObj.students[i].grade > topStudent.grade) {
      topStudent = classroomObj.students[i];
    }
  }

  return topStudent.name;
}

// Example usage:
let classroom = {
  students: [
    { name: "Uwineza", grade: 90 },
    { name: "Florence", grade: 85 },
    { name: "James", grade: 78 }
  ]
};

console.log(getTopStudent(classroom)); // Output: "Uwineza"




function getBooksByAuthor(booksArray, authorName){
  let titles=[];
  for(let i =0 ; i< booksArray.length; i++){
    if(authorName === booksArray[i].author){
      titles.push(booksArray[i].title);
    }
  }
  return titles.join(' ');
}

let books = [
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", pages: 472 },
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford", pages: 176 },
  { title: "You Don’t Know JS", author: "Kyle Simpson", pages: 278 }
];

console.log(getBooksByAuthor(books,"Marijn Haverbeke"));



function getOnlineUsers(userArray){
  let online=[];
  for(let i =0 ; i< userArray.length; i++){
    if(userArray[i].online === true){
      online.push(userArray[i].username);
    }
  }
  return online;
}
let users = [
  { username: "uwineza20", online: true },
  { username: "florence123", online: false },
  { username: "james_k", online: true },
  { username: "anna99", online: false }
];
console.log(getOnlineUsers(users));


// const book = {
//   title: "JavaScript Guide",
//   author: "Mozilla",
//   year: 2023,
//   pages: 350
// };

for( let keys of Object.keys(book)){
  console.log(keys);
}
for( let values of Object.values(book)){
  console.log(values);
}
for (let [keys,value] of Object.entries(book)){
  console.log(`${keys} : ${value}`);
}


function updateBook(obj, updates) {
  for (let [key, value] of Object.entries(updates)) {
    obj[key] = value; // Update or add property on obj
  }
  return obj;
}

// let boook = {
//   title: "JavaScript Guide",
//   author: "Mozilla",
//   year: 2023,
//   pages: 350
// };

let updates = { year: 2025, pages: 400 };
let updatedBook = updateBook(boook, updates);
console.log(updatedBook);


function toggleSettings(settings, changes){
  for( let [keys,value] of Object.entries(changes)){
     if (keys in settings) {        // Only update if key exists in settings
      settings[keys] = value;
     }
  }
  return settings;
}



let changes = { theme: "dark", notifications: false, language: "en" };
let updatedProfile = toggleSettings(profile, changes);
console.log(updatedProfile);
let profile = {
  theme: "light",
  notifications: true,
  location: "USA"
};

const book = {
  title: "JavaScript Guide",
  author: "Mozilla",
  year: 2023,
  pages: 350
};

let twoObject = { ...profile, ...book };
let twoObjec2 = Object.assign({}, book);

console.log(twoObject);
console.log(twoObjec2);

let frozenPerson = Object.freeze({ name: "Uwineza", age: 22 });

frozenPerson.name = "Florence";    // ❌ Won't change
frozenPerson.city = "Kigali";      // ❌ Won't be added
delete frozenPerson.age;           // ❌ Won't be deleted

console.log(frozenPerson);
// Output: { name: "Uwineza", age: 22 }

let sealedPerson = Object.seal({ name: "Uwineza", age: 22 });

sealedPerson.name = "Florence";    
sealedPerson.city = "Kigali";       
delete sealedPerson.age;            

console.log(sealedPerson);
// Output: { name: "Florence", age: 22 }

let nonExtensiblePerson = Object.preventExtensions({ name: "Uwineza", age: 22 });

nonExtensiblePerson.name = "Florence";   
delete nonExtensiblePerson.age;         
nonExtensiblePerson.city = "Kigali";     

console.log(nonExtensiblePerson);
// Output: { name: "Florence" }

let user = { name: "Uwineza", age: 22 };
let { name, age } = user;
console.log(name, age);

//slice and  splice

let fruits1 = ['apple', 'banana', 'mango', 'orange'];
let sliced = fruits.slice(1, 3);  
console.log(sliced);
console.log(fruits);  

let fruits = ['apple', 'banana', 'mango', 'orange'];
fruits.splice(1, 2, 'kiwi', 'lemon'); 
// Removes 'banana' and 'mango', adds 'kiwi' and 'lemon'
console.log(fruits); // ['apple', 'kiwi', 'lemon', 'orange']

let students = [
  { name: "Alice", score: 45 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 60 },
  { name: "Diana", score: 35 }
];

// Step 1: filter()
let stud = students.filter(students=> students.score>=50);
console.log(stud);
// Step 2: map()
let names = students.map(students=>students.name.toUpperCase());
console.log(names);

(function() {
  console.log("Runs instantly");
})();

// remove duplicate from array
let arr = [1,2,2,3,4,55,4];
let remove = [... new Set(arr)];
console.log(remove);







function multiply(a,b){
  if(typeof a === "number" && typeof b === "number"){
    return a*b;
  }
  else if (typeof a  === "number" && typeof b === "undefined"){
    return a*a;
  }
  else if(Array.isArray(a)){
    return a.map(a=>a*a);
  }
 
}
console.log(multiply([1,2,3,4,5,6,7]));


function capitalizeOdd(str){
  result =[];
  for(let i =0; i<str.length; i++){
    if(i%2 === 0){
     result.push(str[i].toUpperCase());
    }
    else{
      result.push(str[i]);
    }
  }
  return result.join('');
}
console.log(capitalizeOdd("Javascript"));





