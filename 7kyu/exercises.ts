// variable declaration
let country: string = "Rwanda";
let height: number = 12;
let student: boolean = true;
let anyValue;
anyValue = "Math";
anyValue = 30;

//arrays and tuples
let myFavoriteFruit: string[] = ["mango", "apple"];
let mixedVariableType: [string, number, boolean] = ["Fillette", 10, false];

//functions in typescript
//area of a triangle
function area(length: number, width: number): number {
  return length + width;
}

// arrow function
const greet = (name:string)=>`my name is ${name}`;

// array of number and return the sum

function sumOfArray(arr:number[]):number{
return arr.reduce((a,b)=>a+b);
}
console.log(sumOfArray([1,2,3,4,5]));
