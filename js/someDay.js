(function() {

    "use strict"


// provides html for INDIVIDUAL coffee objects.
// template to build renderCoffees function
    function renderCoffee(coffee) {
        var html = '<div class=" row ms-2 mb-2 coffee">';
        html += '<div class="col d-flex align-items-end p-0"><h3 class="mb-0 mx-2">' + coffee.name + '</h3><p class=" mb-0">' + coffee.roast + '</p></div>';
        html += '</div>';

        return html;
    }

// provides the html for All coffee objects
// uses above renderCoffee function to create individual html
// blocks for each coffee object and then combines them into one big html block
    function renderCoffees(coffees) {
        var html = '';
        for (var i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }

//displays filtered list of coffees based on roast
    function updateCoffees(e) {
        e.preventDefault(); // don't submit the form, we just want to update the data
        var selectedRoast = roastSelection.value;
        var filteredCoffees = [];
        // if statement added to check if all coffees are wanted or a specific roast
        // case-insensitive
        if (selectedRoast.toLowerCase() == "all") {
            tbody.innerHTML = renderCoffees(combinedArray);
        } else {
            combinedArray.forEach(function (coffee) {
                if (coffee.roast === selectedRoast.toLowerCase()) {
                    filteredCoffees.push(coffee);
                }
            });
            tbody.innerHTML = renderCoffees(filteredCoffees);
        }
    }

//array of coffee objects
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
    var coffees = [
        {id: 1, name: 'Light City', roast: 'light'},
        {id: 2, name: 'Half City', roast: 'light'},
        {id: 3, name: 'Cinnamon', roast: 'light'},
        {id: 4, name: 'City', roast: 'medium'},
        {id: 5, name: 'American', roast: 'medium'},
        {id: 6, name: 'Breakfast', roast: 'medium'},
        {id: 7, name: 'High', roast: 'dark'},
        {id: 8, name: 'Continental', roast: 'dark'},
        {id: 9, name: 'New Orleans', roast: 'dark'},
        {id: 10, name: 'European', roast: 'dark'},
        {id: 11, name: 'Espresso', roast: 'dark'},
        {id: 12, name: 'Viennese', roast: 'dark'},
        {id: 13, name: 'Italian', roast: 'dark'},
        {id: 14, name: 'French', roast: 'dark'},
    ];


// functions added by us :)
//function to update coffee list based on user typing
    function updateCoffeesByName(e) {
        var selectedName = coffeeNameSearch.value;
        var filteredCoffees = [];
        combinedArray.forEach(function (coffee) {
            if (coffee.name.toLowerCase().includes(selectedName.toLowerCase())) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }

// function to place a coffee order
    function placeOrder(e) {
        e.preventDefault()
        var selectedName = coffeeNameSearch.value;
        // loops through coffee list and checks if their order matches a coffee on the menu
        combinedArray.forEach(function (coffee) {
            if (coffee.name.toLowerCase() == (selectedName.toLowerCase())) {
                // code to display pop up gif
                var headerText = document.getElementById('popupText');
                headerText.innerHTML = coffee.name + " coffee coming right up!";
                audio.play();
                popUp.classList.add('active');
                overlay.classList.add('active');
                var timeout = setTimeout(function () {
                    document.location.reload();
                }, 7000)
            }
        });
    }


// this function turns the user input into a coffee object with a unique ID
// so that it can be added to the list of coffees
    function createCoffeeObject(inputName, inputRoast) {
        var newId = combinedArray.length + 1;
        return {
            id: newId,
            name: inputName,
            roast: inputRoast
        }
    }

// this function adds the new coffees to the second array and saves them to local storage
    function addCoffees(e) {
        if(coffeeName.value.length > 2) {
            secondArray.push(createCoffeeObject(coffeeName.value, createRoastSelection.value));
            localStorage.setItem('storedArry', JSON.stringify(secondArray));
            // code to display popup gif
            var headerText = document.getElementById('popupText');
            headerText.innerHTML = coffeeName.value + " coffee added to the menu!";
            audio.play();
            popUp.classList.add('active');
            overlay.classList.add('active');
            var timeout = setTimeout(function () {

                document.location.reload();
            }, 7000)
        }
    }


// variables
// this line is grabbing the html div responsible for displaying the coffees
    var tbody = document.querySelector('#coffees');
// grabbing the submit button for filtered coffee list
    var submitButton = document.querySelector('#submit');
// grabbing the selection of light, med, or dark for filtered list
    var roastSelection = document.querySelector('#roast-selection');
// grabs the coffee name typed in the search bar
    var coffeeNameSearch = document.querySelector('#search-coffee-name');
// creates the audio object
    var audio = new Audio("assets/dream-by-dreams-143531 (1).mp3")
// grabs popup and overlay for the gif popup
    var popUp = document.getElementById('gif-popup');
    var overlay = document.getElementById('overlay');
// grabs the button responsible for placing an order
    var placeOrderButton = document.getElementById('order');
// get name and roast of new coffee
    var createRoastSelection = document.querySelector('#create-roast-selection');
    var coffeeName = document.getElementById('coffeeName');
// grab add a coffee button
    var creationSubmitButton = document.getElementById('coffee-submit');
// create a second array that is used to hold the user created coffees
    var secondArray = [];
// grab already stored input if there is any
    var storedInput = JSON.parse(localStorage.getItem('storedArry'));
// this checks if there is stored input (user created coffees), and if so, adds it to the second array
    if (storedInput) {
        secondArray = storedInput;
    }
// grabs button that clears all user created coffees
    var clearBtn = document.getElementById('clear');
// this creates a combined array of both the original coffees and user supplied coffees
    var combinedArray = coffees.concat(secondArray);


// event listeners
//event listener to refresh with every letter as the user types in the search bar
    coffeeNameSearch.addEventListener('keyup', function () {
        updateCoffeesByName();
    })
// event listener for order placing button
    placeOrderButton.addEventListener('click', placeOrder);


// this event listener/function clears the stored data (user made coffees)
    clearBtn.addEventListener('click', function () {
        localStorage.clear();
        document.location.reload();
    })

// this displays the combined arrays into the html div
    tbody.innerHTML = renderCoffees(combinedArray.reverse());

// event listeners for the filter coffee button and the create coffee button
    creationSubmitButton.addEventListener('click', addCoffees);
    submitButton.addEventListener('click', updateCoffees);

// easter egg
    var mugOne = document.getElementById('mug-one');
    var mugTwo = document.getElementById('mug-two');
    var easterEgg = document.getElementById('easter-egg');

    mugOne.addEventListener('click', function() {
        mugOne.classList.remove('active-one');
        mugOne.classList.add('inactive');
        mugTwo.classList.add('active-two');
    })

    mugTwo.addEventListener('click', function() {
        mugTwo.classList.remove('active-two');
        mugTwo.classList.add('inactive');
        easterEgg.classList.add('active-three');
    })


})();