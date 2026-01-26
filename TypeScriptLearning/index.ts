let myName: string = "Bob";
let numberOfWheels: number = 4;
let isStudent: boolean = false;
type Food = string;
let favoriteFood: Food = "pizza";
let favoriteNumberfood: Food = "1";
  type Adress ={
        street:string
        city:string
        country:string
    }
type Person ={
    name:string
    age : number
    isStudent:boolean
    adress:Adress
  
}
let person:Person = {
  name: "joe",
  age: 42,
  isStudent: true,
  adress:{
    street:"112",
    city:"Anytown",
    country:"USA"
  }
};
let person2 = {
  name: "willyy",
  age: 66,
  isStudent: false,
};

function add(a: number, b: number): number {
return a + b;
}

console.log(add(5, 3)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
let something;
something ='hello';
something=20;
console.log(something);

let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);
ourTuple.push(10);
ourTuple.push(true);
console.log(ourTuple);

// objects
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};
console.log(car.type);
const car2 = {
  type: "Toyota",
};
car2.type = "Ford"; // no error
car2.type = "2"; 

//