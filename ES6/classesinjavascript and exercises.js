function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

// methods "inherited" by all instances
Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};

var richardsPlane = new Plane(1);
richardsPlane.startEngines();
console.log(richardsPlane.numEngines);

var jamesPlane = new Plane(4);
jamesPlane.startEngines();


class Tree {
  constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    super(size, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');

console.log(myMaple);
// OR log individual properties:
console.log("Size:", myMaple.size);
console.log("Leaf color:", myMaple.leafColor);
console.log("Syrup quantity:", myMaple.syrupQty);


//exercises 
class Animal{
    constructor(name="Unknown", species ="Unknown"){
        this.name=name;
        this.species=species;
    }
    describe(){
        console.log(`I am ${this.name}, a ${this.species}` );
    }

}

let animal = new Animal("Leo", "Lion");
animal.describe();

//exercise 2
class Dog extends Animal{
    constructor(name="Unknown", species="Dog"){
        super(name,species);
    }
    barks(){
        console.log("Woof!");
    }
}

let dog = new Dog("Max");
dog.describe();
dog.barks();


//exercises 3


class vehicle {
    constructor(color = "white", wheels = 4){
        this.color =color;
        this.wheels = wheels;

    }

    drive(){
        console.log(`Driving a ${this.color} vehicle with ${this.wheels} wheels`);
    }
      static Vehicleinfo(){
      console.log("Vehicles are means of transport");
    }
}
 
class Motorcycle extends vehicle {
    constructor(color,wheels=2){
        super(color,wheels);
    }

    wheelie(){
        console.log(`Doing a wheelie!`);
    }

    //exercises 4
    drive(){
        super.drive();
        console.log(`Riding a ${this.color} motorcycle with ${this.wheels} wheels!`);
    }
  
}

let Motor = new Motorcycle();
Motor.drive();
Motor.wheelie();
vehicle.Vehicleinfo(); // calling a static method without having to create an object 


// Exercise 5 — Static Method
// Add a static method Vehicle.info() that logs "Vehicles are means of transport".
// Call it without creating an instance.
// Verify you cannot call it from an instance (try new Vehicle().info() and explain what happens).



// Exercise 6 — Advanced: Combining Everything

// Create a Tree class:

// Constructor: type = "Oak", height = 5

// Method: grow() → increases height by 1

// Subclass Pine extends Tree:

// Defaults type to "Pine"

// Override grow() → increases height by 2 instead of 1, then calls super.grow()

// Create a Pine instance and log height after calling grow() twice.
