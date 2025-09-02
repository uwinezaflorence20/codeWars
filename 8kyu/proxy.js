var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});

console.log(agent.status); // returns 'looking for work'


var obj ={name:"Uwineza", age:20}
var proxy = new Proxy(obj,{

})



const handlers = {
  get(target, property, receiver) {
    // target → the original object
    // property → the property being accessed
    // receiver → the proxy itself
  }
};

const student = { name: "Alice" };

const proxyStudent = new Proxy(student, {
  get(target, property) {
    if (!(property in target)) {
      return "Property not found!";
    }
    return target[property];
    // return target;
  }
});

console.log(proxyStudent.name);   // Alice
console.log(proxyStudent.age);    // Property not found!

const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target); 
        console.log(propName); 
    }
};
const agent = new Proxy(richard, handler);
agent.status; // log


const richard = {status: 'looking for work'};
const handler2 = {
    get(target, propName) {
        console.log(target);
        console.log(propName);
        return target[propName];
    }
};
const agent = new Proxy(richard, handler2);
console.log(agent.status); // (1)logs the richard object, (2)logs the property being accessed, (3)returns the text in richard.status


const richard = {status: 'looking for work'};
const handler3 = {
    get(target, propName) {
        return `He's following many leads, so you should offer a contract as soon as possible!`;
    }
};
const agent = new Proxy(richard, handler3);
console.log(agent.status); 


const richard = {status: 'looking for work'};

const agent = new Proxy(richard, {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }});
agent.payRate = 1000; // set the actor's pay to $1,000
console.log(agent.payRate); // $850 the actor's actual pay


var obj = {
    _age: 5,
    _height: 4,
    get age() {
        console.log(`getting the "age" property`);
        console.log(this._age);
    },
    get height() {
        console.log(`getting the "height" property`);
        console.log(this._height);
    }
};
console.log(obj.age); // logs 'getting the "age" property' & 5
console.log(obj.height); //logs 'getting the "height" property' & 4
obj.weight = 120; // set a new property on the object
console.log(obj.weight); // logs just 120


function*getEmployee() {
console.log('the function has started');

const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

for (const name of names) {
console.log( name );
yield;
    }

console.log('the function has ended');
}

const generatorIterator = getEmployee();
console.log(generatorIterator.next());
console.log(generatorIterator.next());
console.log(generatorIterator.next());


function*getEmployee() {
console.log('the function has started');

const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

for (const name of names) {
yield name;
    }

console.log('the function has ended');
}
const generator = getEmployee();
console.log(generator.next().value);


function* udacity() {
    yield 'Richard';
    yield 'James'
}
const yie = udacity();
console.log(yie.next());
console.log(yie.next());
console.log(yie.next());


function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); 
