const sym1 = Symbol('apple'); // symbol declaration.
console.log(sym1);

//object inside another object
const bowl2 = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.15 },
  'orange': { color: 'orange', weight: 170.097 }
};
console.log(bowl2.apple.color);
console.log(bowl2.apple);

const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};

const symbols = Object.getOwnPropertySymbols(bowl);
console.log(typeof bowl);
console.log(bowl[symbols[0]]);
console.log(bowl[symbols[2]]);


const bananas = symbols.filter(sym => sym.description === "banana");

bananas.forEach(bananaSym => {
  console.log(bowl[bananaSym]);
});



