
    mapboxgl.accessToken =
    'pk.eyJ1IjoicmF5Z2xhc3MiLCJhIjoiY2xndmtzYmhqMDJxZTNjbXU1cGk3enlpeCJ9.CvCiURzPD2T4YeSY9PEGug';

    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
    center: [-94.6708, 38.9822], // starting position [lng, lat]
    zoom: 9, // starting zoom
});
