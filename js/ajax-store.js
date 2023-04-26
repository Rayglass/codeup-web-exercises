
(function() {
    "use strict";
    // TODO: Create an AJAX GET request for the file under data/inventory.json
    // Tool info api request

    $.get('data/inventory.json').done(function(data) {
        console.log(data);
    })

    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields


    var inventoryData;

    function loadData() {
        $("#insertProducts").html("");
        $.ajax("data/inventory.json").done(function (data, status, jqXhr) {

            data.forEach((dataX) => {

                inventoryData = `<tr><td> ${dataX.title} </td><td> ${dataX.quantity} </td><td> ${dataX.price} </td><td> ${dataX.categories} </td></tr>`


                $("#insertProducts").append(inventoryData);
            });
        })
    }

    $("#refresh").click(function() {
        loadData();
    });


})();

//       HINT: You will want to target #insertProducts for your new HTML elements
