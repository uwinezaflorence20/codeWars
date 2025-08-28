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