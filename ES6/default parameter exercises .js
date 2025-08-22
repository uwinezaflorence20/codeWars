//exercise 1
// 🔹 Exercise 1: Simple default parameter
// Write a function greet that takes a name (default "Guest") 
// and a message (default "Welcome!") and returns a string.
function greet(name='Guest', message='Welcome!'){
    console.log( `${message}, ${name} `);
}
greet();
greet("Florence");
greet("Alice" ,"Hello");

//exercise 2
// Exercise 2: Array defaults with destructuring
// Create a function makeRectangle that takes an array [width, height], 
// where width defaults to 5 and height defaults to 10. Return the area of the rectangle.
function makeRectangle([width =5 , height=10] =[]){
    let area = width * height;
    console.log(area);

}
makeRectangle();
makeRectangle([7]);
makeRectangle([7,3]);
makeRectangle([undefined,4]);

//exercise 3

// 🔹 Exercise 3: Object defaults with destructuring
// Write a function createUser that takes an object with properties:
// username (default "Anonymous")
// role (default "User")
// Return a string: "username is a role".


function createUser({username="Anonymous", role="User"} ={}){
    console.log(`${role} is a ${username}`);

}
createUser();
createUser({username:"Florence"});
createUser({role:"Admin"});

// 🔹 Exercise 4: Comparing array vs. object defaults
// Write two versions of a function planTrip:
// Array version → takes [destination, days] with defaults "Unknown" and 1.
// Object version → takes { destination, days } with the same defaults.

function planTrip([destination ='Unknown', days=1] =[]){
console.log(`${days} , destination is ${destination}`)
}
planTrip();  
planTrip(["Paris"]);  
planTrip([, 5]);  
// planTrip({ days: 5 });  


function planTrip({destination ='Unknown', days=1} ={}){
console.log(`${days} , destination is ${destination}`)
}

// planTrip();  
// planTrip(["Paris"]);  
// planTrip([, 5]);  
planTrip({ days: 5 }); 



// Exercise 5 (Challenge 🚀): Nested defaults

// Write a function setupProfile that takes an object like:

// { name, settings: { theme, notifications } }


// with defaults:

// name = "Guest"

// theme = "light"

// notifications = true

// Return a string: "name uses theme theme with notifications on/off".

// Example calls: