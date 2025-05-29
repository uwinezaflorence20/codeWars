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
