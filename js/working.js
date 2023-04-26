var inventoryData;
function loadData() {
    $("#insertProducts").html("");
    $.ajax("data/inventory.json").done(function (data, status, jqXhr) {

        data.forEach(function (dataX, indexX) {
            inventoryData =
                "<tr>" +
                "<th scope=\"row\">" + data[indexX].title.toUpperCase() + "</th>" +
                "<td>" + data[indexX].quantity + "</td>" +
                "<td>" + "$" + data[indexX].price + "</td>" +
                "<td>" + data[indexX].categories.join(", ").toUpperCase() + "</td>" +
                "</tr>";
            $("#insertProducts").append(inventoryData);
        });


        // console.log(data);
        // console.log(status);
        // console.log(jqXhr);
    })

        .fail(function (jqXhr, status, error) {
            alert("Test load failed");
            console.log(jqXhr);
            console.log(status);
            console.log(error);
        }).always(function () {
        // alert("This will always happen");
    });
}
loadData();

// TODO: Take the data from inventory.json and append it to the products table
//       HINT: Your data should come back as a JSON object; use console.log() to inspect
//             its contents and fields

//       HINT: You will want to target #insertProducts for your new HTML elements
$("#refresh").click(function(){
    var ref = loadData();
    $("#insertProducts").html(ref);
});





