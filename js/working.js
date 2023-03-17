// "use strict";
//

// //Write a function that accepts and multiplies 3 numbers and alerts the browser with the result
//
// //Define the function
// //accept 3 numbers
// //multiply 3 numbers
// //returns the product
// //execute the function
// //pass in actual values
// //console log results
// //alert results
//
// // /**
// // function returnProduct(numOne, numTwo, numThree){
// //     var result = numOne * numTwo * numThree
// //     alert("my result is: " + result);
// // }
// //
// // returnProduct(3,2,2);
// //
// // */
// //
// // function sayHello(userName){
// //
// //     alert("welcome, " + userName);
// // }
// //
// // var nameInput =prompt('What is your name?');
// //
// // sayHello(nameInput);
// //
// // var pizzaPreference = prompt("What kind of pizza do you like?");
// //
// // if (pizzaPreference === "pineapple and hot sauce") {
// //     alert("What a coincidence, that's my favorite!");
// // } else if (pizzaPreference === "cheese") {
// //     alert("Just plain cheese? Okay...");
// // } else {
// //     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// // }
//
// //Switch Statement
// // var pizzaPreference = prompt("What kind of pizza do you like?");
// //
// // switch(pizzaPreference) {
// //     case "pineapple and hot sauce":
// //         alert("What a coincidence, that's my favorite!");
// //         break;
// //     case "cheese":
// //         alert("Just plain cheese? Okay...");
// //         break;
// //     default:
// //         alert(pizzaPreference + " isn't my favorite, but let's order some!");
// //         break;
// // }
//
// //-------------------------------
//
//
// // function colorOpinions (){
// //     var colorPrompt = prompt("What is your favorite color?");
// //         if(colorPrompt === "blue"){
// //             return("Blue is the BEST.. but don't tell the other colors....");
// //         }else if(colorPrompt === "red"){
// //             return("Red? Yikes..");
// //         } else if(colorPrompt === "cyan"){
// //             return("Hmmm, Cyan, someone with taste I see.");
// //         }
// //          else{
// //             return("The color you entered is undefined, but i'm sure it's nice!");
// //          }
// // }
// // console.log(colorOpinions());
//
// // var temperature = prompt("What is the temperature outside?");
// //
// // //var weather = 75; ***Could also use this approach***
// //
// // if ( temperature > 70 ) {
// //     console.log("Bring Sunnies!");
// // } else if (temperature > 50 && temperature <= 70) {
// //     console.log("Bring Sweater");
// // }
// //   else {
// //       console.log("Don\'t go outside!");
// // }
//
// // var pass = "theSecretPassword";
// // var userGuess = prompt("guess the password");
// //
// // if (userGuess === pass) {
// //     alert("You got it!");
// // }
// //   else {
// //       alert("Try Again!");
// // }
//
//
// // ----------------------------
// // var message;
// // var success = confirm("does this work?");
// //
// // if (success) {
// //     message = "Operation was successful.";
// // } else {
// //     message = "Oops, something went wrong.";
// // }
// //
// // var message = (success) ? "Operation was successful." : "Oops, something went wrong.";
// //
// // console.log(message)
//
// // ----------------------- Don't really use this anymore but it replaces as above
//
// // var success = confirm("does this work?");
// //
// // var message = (success) ? "Operation was successful." : "Oops, something went wrong.";
// //
// // console.log(message)
//
// // write a function that acepts the weather and returns bring sunnies if its sunny and returns bring sweater if its chilly
//
// // var weather = 'chilly'
// // function checkWeather(weather) {
// //     if (weather == 'sunny') {
// //         return 'bring sunnies';
// //     } else if (weather == 'chilly') {
// //         return 'test';
// //     }
// //       else {
// //         return 'whatever you want';
// //     }
// // }
// // console.log(checkWeather(weather))
//
//
// // function addOne(input) {
// //     var num = Number(input)
// //     return num + 1
// // }
// //
// // console.log(addOne("-99"))
//
//
// function logger () {
//     console.log("Go Time");
//     console.log("Go Time");
//     console.log("Go Time");
// }
//
// logger(); // function invocation
//
// const name = "Dev Ed";
//
// function addMe(num1, num2) {
//     console.log(num1 + num2);
// }
//
// addMe(3,5);
//
// // The function does not do anything but store information. the invocation is what runs the equation
//
// function toUpper(text) {
//     const name = "upperCase";
//     text.toUpperCase();
//     console.log(upperCase);
// }
//
// toUpper()

//WORKING WITH LOOPS

//WHILE LOOPS -- Executes Block as long as condition is true. -- Condition stated at beginning of function
//CONDITION WOULD HAVE TO RESULT IN BOOLEAN EXPRESSION

var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}

var i = 1;
while (i < 65536) {
    i = i * 2
    console.log(i);
    i++;
}

var i = 10;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}

//DO WHILE LOOPS = Same as a while loop with exception that the condition is evaluated at the end of the look.

var i = 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);




//FOR LOOPS ---> RUNS FIRST LOOP ITERATION TO INITIALIZE --->CHECK CONDITIONS ---> INCREMENTS (PERFORMS  ACTION)
for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}
for (var i = 0, j = 9; i < 10; i++, j--) {  //TWO DIFFERENT VARIABLES WITH INCREMENT AND DECREMENT HAPPERNING
    console.log('for loop iteration #' + i + ', j = ' + j);
}

//we will use for loops when we know ahead of time how many times the loop needs to run, and while or do-while loops when we cannot know how many times the loop needs to run.


//BREAK AND CONTINUE
//BREAK allows you to exit loop at any time
var numberToStopAt = 5;

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}


//CONTINUE - sometimes conditions occur that give reason to skip to the next loop iteration without completing the entire loop code block

for (var i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
}
