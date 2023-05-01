


//MAPBOX_TOKEN is specified in the keys.js file which is equal to my token
// define variables for the map and marker
let map;
let marker = new mapboxgl.Marker();

// initialize the map

mapboxgl.accessToken = MAPBOX_KEY;
map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-night-v1',
    zoom: 10,
    center: [-94.6708,  38.9822]
});

// when page loads auto set marker to my home location
map.on("load", function (){
    marker.setLngLat([-94.6708,  38.9822]).addTo(map)
});

// when page loads auto shows the forecast for 5 days at the location
$.get("https://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    q:     "Overland Park, US",
    units: "imperial"
}).done(function(data) {
    // clear the previous weather data
    $("#weather").empty();

    // loop over the forecast data and create a card for each day
    for (let i = 0; i < 40; i += 8) {
        console.log(data.list[i])
        $('#weather').append("<div class='weatherCards'><p class='date'>" + data.list[i].dt_txt.substring(0, 10) + "</p>" +
            "<p>" + data.list[i].main.temp_min + " °F" + " / " + data.list[i].main.temp_max + " °F" + "</p>" +
            "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" +
            "<hr class='HR'>" +
            "<p>Description: " + data.list[i].weather[0].description + "<hr class='HR'>" +
            "<p>Humidity: " + data.list[i].main.humidity + "%" + "<hr class='HR'>" +
            "<p>Wind: " + data.list[i].wind.speed +  " mph" + "<hr class='HR'>" + "</p>" +
            "<p>Pressure: " + data.list[i].main.pressure + " Hg" + "</p>")
    }
});



// handle the map click event for when click on another location it updates
map.on('click', function(click) {
    // set the marker position to the clicked location
    marker.setLngLat(click.lngLat).addTo(map);

    // get the weather data for the clicked location
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: click.lngLat.lat,
        lon: click.lngLat.lng,
        units: "imperial"
    }).done(function(data) {
        // clear the previous weather data
        $("#weather").empty();

        // loop over the forecast data and create a card for each day
        for (let i = 0; i < 40; i += 8) {
            $('#weather').append("<div class='weatherCards'><p class='date'>" + data.list[i].dt_txt.substring(0, 10) + "</p>" +
                "<p>" + data.list[i].main.temp_min + " °F" + " / " + data.list[i].main.temp_max + " °F" + "</p>" +
                "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" +
                "<hr class='HR'>" +
                "<p>Description: " + data.list[i].weather[0].description + "</p>" +
                "<p>Humidity: " + data.list[i].main.humidity + "%" + "<hr class='HR'>" +
                "<p>Wind: " + data.list[i].wind.speed +  " mph" + "<hr class='HR'>" + "</p>" +
                "<p>Pressure: " + data.list[i].main.pressure + " Hg" + "</p>")
        }
    });
});

// function to have the geocoder update the map when searched location
document.getElementById("search-btn").addEventListener("click", geocoder);
function geocoder() {
    let location = document.getElementById('search-box').value;

    // use the Mapbox Geocoding API to get the latitude and longitude of the location
    $.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json", {
        access_token: MAPBOX_KEY
    }).done(function(data) {
        // get the latitude and longitude from the response
        let lng = data.features[0].center[0];
        let lat = data.features[0].center[1];

        // set the map center and marker location to the latitude and longitude
        map.setCenter([lng, lat]);
        marker.setLngLat([lng, lat]);


    });
}
$("#search-btn").click(function () {
    let searchQuery = $("#search-box").val();
    if (searchQuery.length > 0) {
        // use the mapbox to get the coordinates of the location
        $.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + searchQuery + ".json", {
            access_token: MAPBOX_KEY,
            type: "place",
            limit: 1
        }).done(function (data) {
            // get the coordinates of the location from the Mapbox Geocoding API response
            let longitude = data.features[0].center[0];
            let latitude = data.features[0].center[1];

            // set the map center and marker location to the new location
            map.setCenter([longitude, latitude]);
            marker.setLngLat([longitude, latitude]).addTo(map);


            // use the OpenWeather API to get the forecast for the new location
            $.get("https://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_APPID,
                lat: latitude,
                lon: longitude,
                units: "imperial"
            }).done(function (data) {
                // clear the previous weather data
                $("#weather").empty();

                // loop over the forecast data and create a card for each day
                for (let i = 0; i < 40; i += 8) {
                    $('#weather').append("<div class='weatherCards'><p class='date'>" + data.list[i].dt_txt.substring(0, 10) + "</p>" +
                        "<p>" + data.list[i].main.temp_min + " °F" + " / " + data.list[i].main.temp_max + " °F" + "</p>" +
                        "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" +
                        "<hr class='HR'>" +
                        "<p>Description: " + data.list[i].weather[0].description + "</p>" +
                        "<p>Humidity: " + data.list[i].main.humidity + "%" + "<hr class='HR'>" +
                        "<p>Wind: " + data.list[i].wind.speed +  " mph" + "<hr class='HR'>" + "</p>" +
                        "<p>Pressure: " + data.list[i].main.pressure + " Hg" + "</p>")
                }

            });

        });
    }
});