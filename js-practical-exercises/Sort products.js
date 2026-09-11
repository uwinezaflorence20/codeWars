const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 150 },
  { name: "Keyboard", price: 100 },
  { name: "Monitor", price: 300 }
];

let ascendingProduct = products.sort((a,b)=> a.price - b.price);
console.log(ascendingProduct);
let cheaperProduct = products.filter((a)=> a.price > 500);
console.log(cheaperProduct);
let totalPrice = products.reduce((a,b)=> a + b.price,0);
console.log(totalPrice);
let mostExpensive = products.reduce((a,b)=> a.price > b.price ? a : b);
console.log(mostExpensive);
let mostCheapest = products.reduce((a,b)=> a.price < b.price ? a : b);
console.log(mostCheapest);
let sortByName = products.sort((a,b)=> a.name - a.name);
console.log(sortByName);
