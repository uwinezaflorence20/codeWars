import {getPizzaDetail} from './firstProgramofTypescript'
console.log(getPizzaDetail());
var myName = "Bob";
var numberOfWheels = 4;
var isStudent = false;
var favoriteFood = "pizza";
var favoriteNumberfood = "1";
var person = {
    name: "joe",
    age: 42,
    isStudent: true,
    adress: {
        street: "112",
        city: "Anytown",
        country: "USA"
    }
};
var person2 = {
    name: "willyy",
    age: 66,
    isStudent: false,
};
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
