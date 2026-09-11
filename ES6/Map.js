// syntax
const employees = new Map();
console.log(employees);

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);

employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');
console.log(employees);
employees.clear();
//console.log(employees)

const members =new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

// console.log(members.has('Xavier'));
// console.log(members.has('Marcus'));
// console.log(members);

let iteratorObjForKeys = members.keys();
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());
console.log(iteratorObjForKeys.next());

 let iteratorObjForValues = members.values();
iteratorObjForValues.next();
console.log(iteratorObjForValues.next());
console.log(iteratorObjForValues.next());
console.log(iteratorObjForValues.next());
console.log(iteratorObjForValues.next());
console.log(iteratorObjForValues.next());

// using for of loop
for(let member of members){
    console.log(member);
}

// using for each

members.forEach((value , key)=>{
    console.log(key,value);
})



const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);
console.log(library);
console.log(library.has(book1));


// map exercises

let map = new Map([["id1","Florence"], ["id2","Florence"]]);
map.set("id3","Florence");
map.set("id4","Fillette");
console.log(map);
console.log(map.get("id2"));
console.log(map.has("id2"));
console.log(map.delete("id2"));

// for(let [key,value] of map){
//     console.log(key,value)
// }
for(let el of map){
    console.log(el)
}

let ke = map.keys();
console.log(ke.next());
console.log(ke.next());
console.log(ke.next());
console.log(ke.next());
console.log(ke.next());

let va = map.values();
console.log(va.next());
console.log(va.next());
console.log(va.next());
console.log(va.next());
console.log(va.next());

let en = map.entries();
console.log(en.next());
console.log(en.next());
console.log(en.next());
console.log(en.next());
console.log(en.next());

map.set('obj', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(map.size);


// weakmap
const weakmap = new WeakMap()


// 4. WeakMap Exercises

// 👉 A WeakMap uses objects as keys only and values can be anything. Keys are weakly referenced.

// Exercises

// Create a WeakMap and use objects as keys with values (like {name: "Alice"} → "student").

// Try using a string as a key. What happens?

// Retrieve a value from a WeakMap using .get().

// Check if a key exists using .has().

// Remove a key-value pair with .delete().

// Show garbage collection behavior:

// Create an object, add it as a key in a WeakMap.

// Then set the object reference to null.

// Explain what happens.

