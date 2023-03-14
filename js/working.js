"use strict";



//Write a function that accepts and multiplies 3 numbers and alerts the browser with the result

//Define the function
//accept 3 numbers
//multiply 3 numbers
//returns the product
//execute the function
//pass in actual values
//console log results
//alert results

// /**
// function returnProduct(numOne, numTwo, numThree){
//     var result = numOne * numTwo * numThree
//     alert("my result is: " + result);
// }
//
// returnProduct(3,2,2);
//
// */
//
// function sayHello(userName){
//
//     alert("welcome, " + userName);
// }
//
// var nameInput =prompt('What is your name?');
//
// sayHello(nameInput);
//
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

//Switch Statement
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }

//-------------------------------

// var message;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
//
// var message = (success) ? "Operation was successful." : "Oops, something went wrong.";

function colorOpinions (){
    var colorPrompt = prompt("What is your favorite color?");
        if(colorPrompt === "blue"){
            return("Blue is the BEST.. but don't tell the other colors....");
        }else if(colorPrompt === "red"){
            return("Red? Yikes..");
        } else if(colorPrompt === "cyan"){
            return("Hmmm, Cyan, someone with taste I see.");
        }
         else{
            return("The color you entered is undefined, but i'm sure it's nice!");
         }
}
console.log(colorOpinions());