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