
    "use strict"

    let resetMap = document.querySelector('#resetMap');

    const kpot = {
    Name: 'K-Pot Korean Hot Pot and Grill',
    Location: 'Overland Park, Kansas',
    Favorite: 'Short Ribs',
    longitude: -94.666100,
    latitude: 38.882270
}
    const grinders = {
    Name: 'Grinders Pizza',
    Location: 'Kansas City, Missouri',
    Favorite: 'Pizza, Wings',
    longitude: -94.578087,
    latitude: 39.091450
}
    const lc = {
    Name: 'LCs BBQ',
    Location: 'Kansas City, Missouri',
    Favorite: 'Ribs, Burnt Ends, Pulled Pork',
    longitude: -94.517440,
    latitude: 39.034840
}

    let myFavPlacesToEat = [kpot, grinders, lc];

    //displays 3 of my favorite restaurants with some info about them
    myFavPlacesToEat.forEach((place) => {
    let marker = new mapboxgl.Marker()
    .setLngLat([place.longitude, place.latitude])
    .addTo(map);
    let popup = new mapboxgl.Popup()
    .setHTML(`<h4>${place.Name}</h4>
				They are located in ${place.Location}.
				My favorite menu item is ${place.Favorite}.`);
    marker.setPopup(popup);
});

    //reset map to san antonio
    resetMap.addEventListener('click', function(){
    map.setCenter([-94.6708, 38.9822]);
    map.setZoom(9);
});



