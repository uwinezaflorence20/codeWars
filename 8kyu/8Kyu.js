function digitize(n) {
return n.toString().split('').reverse().map(Number);
}

function litres(time) {
  
  
  return Math.floor(time * 0.5);
}

function squareSum(numbers){

  return numbers.map(x => x*x).reduce((a, b) => a + b, 0)
}

function duckDuckGoose(players, goose) {
  const index = (goose - 1) % players.length;
  return players[index].name;
}

function isVow(a){
  return a.map(code => {
    const char = String.fromCharCode(code);
    return 'aeiou'.includes(char) ? char : code;
  });
}

var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

function twoSort(s) {
 const first = s.slice().sort()[0];       // sort a copy, get first string
  return first.split('').join('***');
}

function padIt(str,n){
  //coding here
//   var cha ="";
//   var sig="*";
//   var i =0
  
//   while(i<=n){
//     if(i%2===0){
//       cha = cha + sig;
//     }
//     else{
//       cha = sig+str;
//     }
//     i++; 
//   }
//   return cha;
  
  var pad = "*";
  var left = Math.ceil(n/2), right = n-left;
  return pad.repeat(left) + str+ pad.repeat(right);
  
}
padIt("a",5);

function pickIt(arr){
  var odd=[],even=[];
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2){
      odd.push(arr[i]);
    }else{
      even.push(arr[i]);
    }
  }
  return [odd,even];
}
function combat(health, damage) {
  // Write your code here
  
  
  if (health < damage){
   return 0;
  }
  else 
  
  return health - damage;
}
function helloWorld() {
  var str = "Hello World!";
  console.log(str);
}
function main (verb, noun){
  return verb + noun
}
function addFive(num) {
  var total = num + 5;
  return total;
}
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function _if(bool, func1, func2) {
  if (bool) {
    return func1();
  } else {
    return func2();
  }
}
function square(num){
  return num*num;
}

function greet(){
  return "hello world!";
}
function doTurn () {
  // Call functions here
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
  
}
function findAverage(array) {
  if(array.length === 0) return 0;
 const sum = array.reduce((acc,num) => acc+num ,0);
  return sum /array.length;
}
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return mpg*fuelLeft>=distanceToPump;
};

function plural(n) {
  // ...
  return n!==1;
}

function calculator(a, b, sign) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "unknown value";
  }

  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;  // Allow division by zero to return Infinity or -Infinity
    default:
      return "unknown value";
  }
}
function validateHello(greetings) {
  const regex = /hello|ciao|salut|hallo|hola|ahoj|czesc/i//regex here/.test(greetings) 
  return regex.test(greetings);
}

function removeChar(str){
 //You got this!
  
  if (str.length === 2){
    return ""
  }
  else{
    return str.substring(1,str.length - 1)
  }

};

const stringToNumber = function(str){

  return parseInt(str);
}

function positiveSum(arr) {
  let sum = 0;
  for(let i = 0 ; i< arr.length ; i++){
    if (arr[i] > 0){
      sum = sum + arr[i];
    }
    
  }
  return  sum;
}

const isReallyNaN = (val) => {
  // return isNaN(val);  // wasn't working as planned :-(
  
  return Number.isNaN(val) ;
};

function integrate(coefficient, exponent) {
  if(coefficient<=0 && exponent<=0){
    return " coefficient and exponent should be positive"
  }
  else {
    let newexponent = exponent +1;
    let newcoefficient = coefficient / newexponent;
    return newcoefficient + "x"+"^"+ newexponent;
  }
    
  
}

function calculateTip(amount, rating) {
  rating = rating.toLowerCase(); // Convert input to lowercase

  if (rating === "excellent") {
    return Math.ceil(amount * 0.2);
  } else if (rating === "great") {
    return Math.ceil(amount * 0.15);
  } else if (rating === "good") {
    return Math.ceil(amount * 0.1);
  } else if (rating === "poor") {
    return Math.ceil(amount * 0.05);
  } else if (rating === "terrible") {
    return 0;
  } else {
    return "Rating not recognised";
  }
}

function checkAlive (health) {
  if (health > 0) {
    return true
  } else  {
    return false
  }
}
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) {
    return [];
  }
  
  let sum =0;
  let count =0;
  for(let i = 0 ; i < input.length ; i++){
    if(input[i] >0){
    count++;
    }
    else{
       sum = sum + input[i];
    }
  }
  return [count , sum];
}

function printArray(array){
  return array.join(",")
}
function sum (numbers) {
  let sum = 0
  for ( let i = 0 ; i< numbers.length ; i++){
  if(numbers.length === 0){
    return 0;
  }
    else  {
       sum = sum + numbers[i];
    }
    }
  return sum;
}

// add the value "codewars" to the already defined websites array
 websites.push("codewars");

 function litres(time) {
  
  
  return Math.floor(time * 0.5);
}

function digitize(n) {
return n.toString().split('').reverse().map(Number);
}

function squareSum(numbers){

  return numbers.map(x => x*x).reduce((a, b) => a + b, 0)
}

function duckDuckGoose(players, goose) {
  const index = (goose - 1) % players.length;
  return players[index].name;
}

function isVow(a){
  return a.map(code => {
    const char = String.fromCharCode(code);
    return 'aeiou'.includes(char) ? char : code;
  });
}

var Ball = function(ballType) {
  // your code goes here
 this.ballType = ballType || "regular";
};