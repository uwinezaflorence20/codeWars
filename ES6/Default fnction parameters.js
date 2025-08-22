function greet(name, greeting) {
  name = (typeof name !== 'undefined') ?  name : 'Student';
  greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';

  return `${greeting} ${name}!`;
}
console.log(greet());  
console.log(greet('Alice'));
console.log(greet('Bob', 'Hello')); 


function functionName(param ='hello') {
return `${param}`; 
}
console.log(functionName());

function greet(name = "Guest",message="welcome home") {
  console.log(`${message} , ${name}!`);
}

greet();         
greet("Florence"); 
greet("Alice", "Hello");


function greets([names = "Guest",messages="welcome home"] =[]) {
  return `${messages} , ${names}!`;
}

console.log(greets());         
console.log(greets(["Florence"])); 
console.log(greets(["Alice", "Hello"]));

function createGrid([width = 5, height = 5]) {
  return `Generates a ${width} x ${height} grid`;
}

console.log(createGrid([])); 
console.log(createGrid([2])); 
console.log(createGrid([2, 3])); 
console.log(createGrid([undefined, 3]));


function createGrid([width = 5, height = 5] = []) {
  return `Generates a ${width} x ${height} grid`;
}

console.log(createGrid());       
console.log(createGrid([]));      
console.log(createGrid([2]));         
console.log(createGrid([2, 3]));  
console.log(createGrid([undefined, 3])); 
console.log(createGrid([null, 3]));  



function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}
console.log(houseDescriptor(['green',['white','blue','red']]));


function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

console.log(createSundae({})); // Your sundae has 1 scoop with Hot Fudge toppings.
console.log(createSundae({scoops: 2})); // Your sundae has 2 scoops with Hot Fudge toppings.
console.log(createSundae({scoops: 2, toppings: ['Sprinkles']})); // Your sundae has 2 scoops with Sprinkles toppings.
console.log(createSundae({toppings: ['Cookie Dough']}));

function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}

console.log(houseDescriptor());
console.log(houseDescriptor({}));
console.log(houseDescriptor({houseColor: 'blue',shutterColors: ['white','blue','red']}));



