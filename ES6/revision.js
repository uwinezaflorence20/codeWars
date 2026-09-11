// let and const
function getClothing(isCold) {
if (isCold) {
var freezing = 'Grab a jacket!';
} else {
var hot = 'It’s a shorts kind of day.';
console.log(freezing);
}
}
console.log(getClothing(false))

var x;          // declaration hoisted
console.log(x); // undefined
x = 5;          // initialization stays in place


sayHi(); // Works!
function sayHi() {
  console.log("Hello");
}

// destructuring
const point = [10, 25, -34];
const [x, , z] = point;
console.log(x,z);


const circle = {
  radius: 10,
  color: 'orange',
  getArea: function() {
    return Math.PI  *this.radius*  this.radius;
  },
  getCircumference: function() {
    return 2  *Math.PI*  this.radius;
  }
};

let {radius, getArea, getCircumference} = circle;


const fruits = ["apples", "bananas", "pears"];
console.log(...fruits);

const vegetables = ["corn", "potatoes", "carrots"];
const produce = [...fruits, ...vegetables];
console.log(produce);