"use strict";

console.log('Hello from External JavaScript!');

//--------------------------------------

alert('Welcome to my Website!');

//---------------------------------------

var color = prompt('What is your favorite color?');
console.log(color);

alert('Great, ' + color + ' is my favorite color too!');

//.....................................

var littleMermaidDays = Number(prompt('How many days would you like to rent The Little Mermaid?'));
console.log("user entered " + littleMermaidDays);

var brotherBearDays = Number(prompt('How many days would you like to rent Brother Bear?'));
console.log("user entered " + brotherBearDays);

var herculesDays = Number(prompt('How many days would you like to rent Hercules?'));
console.log("user entered " + herculesDays);

var costPerDay = Number(prompt("How much does a single movie cost to rent per day?"));

var totalCost = (herculesDays + brotherBearDays + littleMermaidDays) * costPerDay;

console.log(totalCost);

alert('The total cost is $' + totalCost + ' for your movies');


// //.....................................

var googleHours = Number(prompt('How many hours did you work for Google?'));
var googlePay =  Number(prompt('How much do you make an hourly for Google?'));
console.log('Total Google Pay is $' + (googleHours * googlePay));

var amazonHours = Number(prompt('How many hours did you work for Amazon?'));
var amazonPay = Number(prompt('How much do you make an hourly for Amazon?'));
console.log('Total Amazon Pay is $' + (amazonHours * amazonPay));

var fbHours =  Number(prompt('How many hours did you work for Facebook?'));
var fbPay = Number(prompt('How much do you make an hourly for Facebook?'));
console.log('Total Facebook Pay is $' + (fbHours * fbPay));

var totalPay = (googleHours * googlePay) + (amazonHours * amazonPay) + (fbHours * fbPay);
console.log('Total Pay is $' + (totalPay));
alert('Your total weekly income is $' + totalPay);


//.....................................

var classIsNotFull = confirm("Class is not full");
var noScheduleConflicts = confirm("schedules do not conflict");

var studentEnrolled = classIsNotFull && noScheduleConflicts;
console.log(studentEnrolled);
console.log("class not full " + classIsNotFull);
console.log("schedules do not conflict " + noScheduleConflicts);

alert("Student can enroll: " + studentEnrolled);



//.....................................


var numberOfItems = Number(prompt("How many items in cart?")); //Number
var validOffer = confirm("Is the offer valid?"); //boolean - true - false
var premium = confirm("Does customer have premium membership?"); //boolean
var discountApplied = validOffer && (premium || numberOfItems > 2);
alert("Can use discount: " + discountApplied);



//..........................................

var username = 'codeup';
var password = 'notastrongpassword';


// Create a variable that holds a boolean value for each of the following conditions:

// the password must be at least 5 characters
var atLeastFivePassword = password.length >= 5;


// the password must not include the username

var usernameNotInPassword = password.indexOf(username) === -1;

var usernameNotInPassword = ! password.includes(username;

// the username must be no more than 20 characters

var userNameNotaParagraph = username.length <= 20;

var username.length <= 20;
// neither the username or password can start or end with whitespace
var whitespace = username.trim() && password.trim();

var noWhitespace = username.trim() === username && password.trim() === password;

username.trim();
password.trim();

console.log(password);
console.log(username);
console.log(password.length);