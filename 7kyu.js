function add(num1){
  return function(num2){
    return num1+num2;
  }
}

function reverse(n) {
  let reversed = 0;
  let num = Math.abs(n);

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return n < 0 ? -reversed : reversed;
}


function alternateSqSum(arr){
  let result = [];

  for(let i = 0; i < arr.length ; i++){
    if(i % 2 === 1){
      // square the number at odd index
      result.push(arr[i] ** 2);
    } else {
      result.push(arr[i]);
    }
  }

  return result.reduce((a, b) => a + b, 0);
}


function compoundArray(a, b) {
  let arr=[];
 for (let i=0;i<(a.length>b.length?a.length:b.length);i++){ arr.push(a[i])
  arr.push(b[i])}
  return arr.filter(v=>v!=undefined)
} 

function descendingOrder(n){
  //...
  return Number(
    String(n)                     
      .split("")                  
      .sort((a, b) => b - a)      
      .join("")                   
  );
}

function oddOrEven(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  if (sum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
function addBinary(a,b) {
 let sum = a+b;
  let binaryValue = sum.toString(2);
  return binaryValue;
}

const binaryArrayToNumber = arr => {
  // your code
  let str = String(arr.join(""));
  return parseInt(str,2);
};