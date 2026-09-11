// Solve all the typing issues in the code without changing the implementation

// class Counter {
//   static count = 0;

//   increment() {
//     this.count++;
//   }

//   static getCount() {
//     return this.count;
//   }
// }

//Answer
class Counter{
    static count:number=0;
    increment():void{
        Counter.count++;
    }
    static getCount():number{
        return Counter.count;
    }
}

// Q2.  Write a generic function identity that returns the value it receives without changing the type.
function identity<T>(value:T):T{
    return value
}
console.log(identity(10));

//Q3. Write a TypeScript function processValue that takes string | number | boolean | null | undefined, 
// uses type guards to log uppercase strings, numbers fixed to two decimals, and boolean as "True"/"False,” 
// and throws an error for null or undefined, including a type assertion to narrow the type.

function processValue(value : string|number|boolean|undefined|null){
if(typeof value ==="undefined" ||value ==="null"){
    throw new Error("this is an error");
}
let assertion = value as string|number|boolean;
if(typeof assertion ==="string"){
    return assertion.toUpperCase();
}
else if(typeof assertion === "number"){
    return assertion.toFixed(2);
}
  else if (typeof assertion === "boolean") {
    return assertion ? "True" : "False";
  }
}
console.log(processValue(null));