"use strict";

//Create a file named while.js in the js directory.
//Create a while loop that uses console.log() to create the output shown below.

var i = 2;

do {
    console.log(i);
    (i *=2);
    // i = i * 2;
} while (i <= 65536);




//An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
conesToBuy = Math.floor(Math.random() * 5) + 1;

// var conesToBuy;
//
//
do {
    conesToBuy = Math.floor(Math.random() * 5) + 1;
    console.log(allCones + " :cones left");
    if(conesToBuy > allCones ){
        console.log("Cannot sell you " + conesToBuy + " cones, I have " + allCones);
        continue;
    }else {
        console.log(conesToBuy + " cones sold");
        allCones -= conesToBuy;
    }
} while (allCones > 0);
    console.log("I sold them all!");