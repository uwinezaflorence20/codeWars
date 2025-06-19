var balance = 0;
var checkBalance = false;
var isActive = false;

if (checkBalance === false) {
    console.log("Thank you. Have a nice day!");
} else {
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance + ".");
    } else if (isActive === false) {
        console.log("Your account is no longer active.");
    } else if (balance === 0) {
        console.log("Your account is empty.");
    } else {
        console.log("Your balance is negative. Please contact bank.");
    }
}

var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

if ((flavor === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "sprinkles" || toppings === "peanuts")) {
        
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}

var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

if (shirtWidth >= 18 && shirtWidth < 20 &&
    shirtLength >= 28 && shirtLength < 29 &&
    shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
    console.log("S");
} else if (shirtWidth >= 20 && shirtWidth < 22 &&
           shirtLength >= 29 && shirtLength < 30 &&
           shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
    console.log("M");
} else if (shirtWidth >= 22 && shirtWidth < 24 &&
           shirtLength >= 30 && shirtLength < 31 &&
           shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
    console.log("L");
} else if (shirtWidth >= 24 && shirtWidth < 26 &&
           shirtLength >= 31 && shirtLength < 33 &&
           shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
    console.log("XL");
} else if (shirtWidth >= 26 && shirtWidth < 28 &&
           shirtLength >= 33 && shirtLength < 34 &&
           shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
    console.log("2XL");
} else if (shirtWidth === 28 &&
           shirtLength === 34 &&
           shirtSleeve === 10.13) {
    console.log("3XL");
} else {
    console.log("NA");
}


/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;
switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary = 84396;
        break;
}


console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");
// your code goes here


var row ;
var column;
for ( row = 0 ; row<=25; row++){
    for (column = 0; column <= 99 ; column++){
      console.log(row+ "-" +column);  
    }
    
}

function isPrime(integer){
    for(var x=2 ; x < integer ; x++){
        if(integer%x===0){
        console.log(integer + " is divisible by "+x );
        return false;
        }}
    return true;
}
console.log(isPrime(21));

// function isThisWorking(input) {
//   console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
//   return "Returning: I am returning this string!";
// }

// console.log(isThisWorking(3));

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
}

console.log(isThisWorking(3));

function combat(health, damage) {
  // Write your code here
  var new_health;
  
  if (health < 0){
    return "Health cannot go below 0";
  }
  else 
    return new_health = health - damage;
}


function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
console.log(makeLine(10));

function buildTriangle(length) {
    
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
console.log(makeLine(10));
    // Let's build a huge string equivalent to the triangle
    var triangle = "";
    
    //Let's start from the topmost line
    var lineNumber = 1;
    
    for(lineNumber=1; lineNumber<=length; lineNumber++){
        // We will not print one line at a time.
        // Rather, we will make a huge string that will comprise the whole triangle
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}
console.log(buildTriangle(10));


// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}


console.log(helloCat(catSays));




var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

// inline function
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions ("happy", function(num) {
    var sound = ""; 
    for (var i = 0 ; i < num ; i++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
});


function multi(arr) {
  var product = 0;
  for(var i = 0 ;i<arr.length; i++){
  product = product *arr[i];
  }
  return product;
}
function add(arr) {
   var sum = 0;
  for(var i = 0 ;i<arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
}

function reverse(str) {
  return str.split('').reverse().join('');
}

let arr=[10,3,4];
console.log(multi(arr));