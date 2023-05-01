
    mapboxgl.accessToken = MAPBOX_KEY
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
    center: [-94.6708, 38.9822], // starting position [lng, lat]
    zoom: 9, // starting zoom
});


    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        console.log('5 day forecast', data);
    });