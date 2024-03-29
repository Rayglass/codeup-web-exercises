"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and boolean in data type.
// step 3, when step2 called the function with an input argument, then return back the result
function isTrue(userInput) {
    return userInput === true; // here asking is the input condition is true?
    //example:
    // 1. if input = "true" passing in, then string is not true condition
    // 2. if input = true passing in, then this is a condition, so true = to true return true
}

var userInput = "true"; // step 1, define a variable with a value
var returnResult = isTrue(userInput); // step 2, call function named isTrue() with a single argument as input
console.log(returnResult);

// you can use the returnResult value for next step4....

//
// //Define a function named isFalse that takes in a value and returns true if and only if the argument provided false.
function isFalse(input) {
    return input === false;
}
//
// // Define a function named not that takes in any input and returns the boolean opposite of the provided input.
function not(input) {
    return !input;
}
//
// // Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.
function addOne(input) {
    return +input + 1;
}
//
// // Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.
function isEven(input) {
    if (+input % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
//
// //Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value, then return true. If the values are not the same data type or not the same value, return false.
// function isIdentical(inputOne, inputTwo) {
if (inputOne === inputTwo) {
    return true;
} else {
    return false;
}

// // Define a function named isEqual that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.
function isEqual(inputOne, inputTwo) {
    if (inputOne == inputTwo) {
        return true;
    } else {
        return false;
    }
}
//
// // Define a function named or that takes in two input arguments. The output returned should be the result of an or operation on both inputs.
function or(inputOne, inputTwo) {
    return inputOne || inputTwo;
}
//
// // Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.
function and(inputOne, inputTwo) {
    return inputOne && inputTwo;
}
//
// // Define a function named concat that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.
function concat(inputOne, inputTwo) {
    var stringOne = inputOne.toString();
    var stringTwo = inputTwo.toString();
    return stringOne + stringTwo;
}
