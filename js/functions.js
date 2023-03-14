"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */


function sayHello(name) {
    return ("Hello " + name + "!");
}
console.log(sayHello("Ray"));

//-------------------------------

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Raymond");
console.log(helloMessage);

//-------------------------------

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myNameIs = "Raymond";
console.log(sayHello(myNameIs));

//-------------------------------

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random

var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(x) {
    console.log(x);
    return x === 2;
}

console.log(isTwo(random));

//-------------------------------

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(percentage, bill){
// tip = bill * percentage;
return bill * percentage;
}
console.log("Tip amount is: $" + calculateTip(.15, 20.99));
console.log("Tip amount is: $" + calculateTip(.20, 20.99));
console.log("Tip amount is: $" + calculateTip(.25, 20.99));
/*console.log(alert("Tip amount is: $" + calculateTip(.15, 20.99)));
console.log(alert("Tip amount is: $" + calculateTip(.20, 20.99)));
console.log(alert("Tip amount is: $" + calculateTip(.25, 20.99)));*/

//-------------------------------

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var bill =Number(prompt('What is the cost of your bill?'));
console.log(bill);
var percentage =Number(prompt('What percentage do you want to tip?'));
console.log(percentage);

function calculateTip(bill, percentage){
// tip = bill * percentage;
    return bill * percentage;
}

alert("tip amount should be $" + calculateTip(bill, percentage));
console.log(calculateTip(bill,percentage));

// console.log("Tip amount is: $" + calculateTip(.15, 20.99));
// console.log("Tip amount is: $" + calculateTip(.20, 20.99));
// console.log("Tip amount is: $" + calculateTip(.25, 20.99));

//-------------------------------

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

var applyDiscount = function (price, discountPercentage){
var discountAmount = price * discountPercentage;
    return price - discountAmount;
}
var originalPrice = 100;
var discountPercentage = .2; // 20%

console.log("discounted amount is: $" + applyDiscount(originalPrice, discountPercentage));
console.log("discounted amount is: $" + applyDiscount(62.99, 0.15));
console.log("discounted amount is: $" + applyDiscount(35.79, 0.12));


/**
var originalPrice = Number(prompt("What is the original price of the item you are purchasing?"));
console.log(originalPrice)
var discountPercentage = Number(prompt("What is the discount amount?"));
console.log(discountPercentage)

function calculateDiscount(originalPrice, discountPercentage){
    return originalPrice * discountPercentage;
}
alert("discount amount is: $" + calculateDiscount(originalPrice, discountPercentage));
console.log("discount amount is: $" + calculateDiscount(originalPrice, discountPercentage));


function discountAmount(originalPrice, calculateDiscount){
    return originalPrice - calculateDiscount;
 }

alert("Final bill amount is: $" + discountAmount(originalPrice, calculateDiscount(originalPrice, discountPercentage)));
console.log("Final bill amount is: $" + discountAmount(originalPrice, calculateDiscount(originalPrice, discountPercentage))); */