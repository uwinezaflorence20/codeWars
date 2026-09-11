let duration = (second)=>{
    if(second === 0) return "now";
    let years = Math.floor(second/(365*24*60*60));
    second %= 365*24*60*60;
     let days = Math.floor(second/(24*60*60));
    second %= 24*60*60;
     let hours = Math.floor(second/(60*60));
    second %= 60*60
    let minutes = Math.floor(second/(60))
    second %= 60;

    let parts =[]
    if(years) parts.push(years + (years>1 ? " years":" year"))
    if(days) parts.push(days + (days >1 ? " days" : " day"))
    if(hours) parts.push(hours + (hours >1 ? " hours" :" hour"))
    if(minutes) parts.push(minutes + (minutes >1 ? " minutes" : " minute"))
    if (second) parts.push(second + (second > 1 ? " seconds" : " second"));
  
      
         if (parts.length === 1) return parts[0];
           return parts.slice(0,-1).join(" , ") + " and " + parts[parts.length-1];
//   return parts.slice(0, -1).join(" , ") + " and " + parts[parts.length - 1];
}

console.log(duration(3662))
console.log(duration(33243586))
console.log(duration(101956166))
console.log(duration(15731080))

console.log(duration(3600))
console.log(duration(120))
console.log(duration(0))


// the second question

class Product {
    constructor(name,price){
        this.name = name;
        this.price =price;
    }
    getDetails(){
        return `the product is  ${this.name} and the price is ${this.price}`;
    }
    applyDiscount(discount){
        let discountPrice =  this.price - (this.price * discount/100);
        return `the new price of dress with discount is ${discountPrice}`;

    }
}

let obj = new Product("Dress","1000");
console.log(obj.getDetails());
console.log(obj.applyDiscount(10))

// the third Question

function* fibonacciGenerator(limit) {
  let a = 0, b = 1;

  while (a <= limit) {
    yield a; 
    [a, b] = [b, a + b]; 
  }
}
for (let num of fibonacciGenerator(50)) {
  console.log(num);
}

let filterAndMap = (people) =>{
    let result =[];
    for (let {name,age} of people){
    if(age > 18){
        result.push(name);
    }
    }
    return result;

}
const people = [
  { name: 'Alice', age: 16 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 17 },
  { name: 'David', age: 25 },
];

const adults = filterAndMap(people);
console.log(adults); // Output: ['BOB', 'DAVID']




let nestedArray = (arr)=>{ 
    let ar = arr.flat(Infinity);
    let a = [...new Set(ar)];
    return a.sort((a,b) => a+b).join(',');

}
const nested = [1, [2, 3], 4, [2, [5, 1]], 3];
const result = nestedArray(nested);
console.log(result);


function extractWordsAndNumbers(arr) {
  const result = [];

  for (const item of arr) {
    const numbers = item.match(/\d+/g); 
    const letters = item.match(/\D+/g);
    if (letters) {
      result.push(...letters.map(l => l)); 
    }
    if (numbers) {
      result.push(...numbers.map(n => Number(n)));
    }
  }

  return result;
}

// Example usage
const input = ["Hello123", "World456", "49", "Another789"];
const output = extractWordsAndNumbers(input);
console.log(output); 
// Output: [ "Hello", 123, "World", 456, 49, "Another", 789 ]
