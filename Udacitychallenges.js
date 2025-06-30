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
  for(var i = 0 ;i<arr.length; i++){git 
    sum = sum + arr[i];
  }
  return sum;
}

function reverse(str) {
  return str.split('').reverse().join('');
}

let arr=[10,3,4];
console.log(multi(arr));

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
donuts.push("powdered");
console.log(donuts.push("powdered"));


/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false. 
 */
 
// your code goes here

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team){
    if(team.length>=7){
        return true;
    }
    else{
      return false  
    } 
}
console.log(hasEnoughPlayers(team));


/*
 * Programming Quiz: Joining the Crew (6-6)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
 * - Your code should use the `push()` method to add new members to the `crew` array
 * - Print the array on the console at the end
 */


var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor);
crew.push(sister);
crew.push(shepherd);
console.log(crew);

// your code goes here



var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];


test.forEach(function(item, index){
    if(item%3===0){

        test[index]=test[index]+100;
    }
    
});
console.log(test);



var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
 var totals = bills.map(function (bill){

     bill *=1.15;
     return Number(bill.toFixed(2));
 })

console.log(totals);

// arrow functions
const hello =()=>console.log("hello people");
hello();

const helloparam =(name)=>console.log(`hello ${name}`);
helloparam("florence");

let arr3 = ["a", "b", "c", "d"];
arr3.reverse();
console.log(arr3);

let arr4 = ["a", "b"];
let newArr4 = arr4.concat(["c", "d"]);
console.log(newArr4);




//OBJECT IN JAVASCRIPT
var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    
    close: function(){
        if(umbrella.isOpen === false){
            return "The umbrella is already closed";
        }
        else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    },
    // your code goes here
};

for( let key in umbrella){
    console.log(key);
    console.log(umbrella[key]);
}
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function (){
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
    }
    
};

console.log(savingsAccount.printAccountSummary());


var facebookProfile = {
    name: "Udacian",
    friends: 25,
    messages: ["Message 1", "Message 2", "Message 3", "Message 4"],
    postMessage: function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index){

        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends = facebookProfile.friends + 1;
    },
    removeFriend: function(){
        if(facebookProfile.friends>0)
            facebookProfile.friends = facebookProfile.friends - 1;
    }
};