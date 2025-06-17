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