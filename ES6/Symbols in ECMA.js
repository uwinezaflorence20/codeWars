const sym1 = Symbol('apple'); // symbol declaration.
console.log(sym1);

//object inside another object
const bowl2 = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.15 },
  'orange': { color: 'orange', weight: 170.097 }
};
console.log(bowl2)
console.log(bowl2.apple.color);
console.log(bowl2.apple);

const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl)
const symbols = Object.getOwnPropertySymbols(bowl);
console.log(typeof bowl);
console.log(bowl[symbols[0]]);
console.log(bowl[symbols[2]]);


const bananas = symbols.filter(sym => sym.description === "banana");

bananas.forEach(bananaSym => {
  console.log(bowl[bananaSym]);
});


const bowl4 = {
  [Symbol('apple')]: { color1: 'red', weight: 136.078 },
  [Symbol('banana')]: { color1: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color1: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color1: 'yellow', weight: 176.845 }
};

let itrator = bowl4[Symbol.iterator]
for(let [key,value] in itrator){
  console.log(key,value);
}


const fruits = {
  apple: { color: "red", weight: 136.078 },
  banana: { color: "yellow", weight: 183.15 },
  orange: { color: "orange", weight: 170.097 }
};

// EASY way: use generator
fruits[Symbol.iterator] = function* () {
  for (let key of Object.keys(this)) {
    yield [key, this[key]];
  }
};

// Now you can use for...of
for (let [key, value] of fruits) {
  console.log(key, value);
}


const fruits = {
  apple: { color: "red", weight: 136.078 },
  banana: { color: "yellow", weight: 183.15 },
  orange: { color: "orange", weight: 170.097 }
};

// Using Object.entries()
for (let [key, value] of Object.entries(fruits)) {
  console.log(key, value);
}




