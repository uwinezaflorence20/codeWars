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

