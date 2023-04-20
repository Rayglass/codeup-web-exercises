"use strict";

    $(document).ready(function() {
        $("#my_audio").get(0).play();
    });


    $(document).keyup(function(event){
    console.log(event.keyCode);
    });


// Konami code sequence based on button assignments
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let konamiIndex = 0;
// Event listener for keyup events
$(document).keyup(function(event) {
// Check if the key pressed matches the next key in the konami code sequence
    if (event.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
// If the whole sequence is entered correctly, show the cheat button
        if (konamiIndex === konamiCode.length) {
            alert('You are a winner and have 30 extra lives!')

            // let $cheatButton = $("<button>").text("Click for your prize").attr("id", "cheat-button");
            // $("body").append($cheatButton);
        }
    } else {
// If a wrong key is pressed, reset code index
        konamiIndex = 0;
    }
});
// Click event listener for the cheat button
// $(document).on("click", "#cheat-button", function() {
//     alert("You are a winner and have another 30 lives!");
// });




