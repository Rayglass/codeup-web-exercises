// Current Weather api call
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// 5 day 3-hour forecast api call
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


mapboxgl.accessToken = MAPBOX_ID;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-98.4946, 29.4252], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

let searchInput = document.querySelector('#search-bar');
let searchBtn = document.querySelector('#search-btn');

// grabs geocode of input to pass to the api in order to receive weather data
const getWeatherData = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_APPID}&units=imperial`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// get weather data for san antonio only
const getDefaultData = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=29.4252&lon=-98.4946&appid=${OPEN_WEATHER_APPID}&units=imperial`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// formats all weather values to display without decimals
const formatWeatherProperties = (cards) => {
    console.log(cards);
    let cardIndex = 0;
    let cardNumber = 0;
    for (let i = 0; i < 5; i++) {
        cardNumber++;
        cardIndex = 8 * i;

        let tempTotal = 0;
        for (let j = 0; j < 8; j++) {
            tempTotal += cards.list[cardIndex].main.temp;
            cardIndex++;
        }
        let avgTemp = Math.floor((tempTotal / 8) + 0.5);

        cardIndex -= 8;
        let windSpeedTotal = 0;
        for (let j = 0; j < 8; j++) {
            windSpeedTotal += cards.list[cardIndex].wind.speed;
            cardIndex++;
        }
        let avgWindSpeed = Math.floor((windSpeedTotal / 8) + 0.5);

        cardIndex -= 8;
        let totalHumidity = 0;
        for (let j = 0; j < 8; j++) {
            totalHumidity += cards.list[cardIndex].main.humidity;
            cardIndex++;
        }
        let avgHumidity = Math.floor((totalHumidity / 8) + 0.5);

        cardIndex -= 8;
        let totalPressure = 0;
        for (let j = 0; j < 8; j++) {
            totalPressure += cards.list[cardIndex].main.pressure;
            cardIndex++;
        }
        let avgPressure = Math.floor((totalPressure / 8) + 0.5);

        cardIndex -= 8;
        let unformattedDate = cards.list[cardIndex].dt_txt;
        let date = formatDate(unformattedDate);

        let icon = weatherIcon(cards.list[cardNumber - 1].weather[0].main);

        buildCards(cards, avgTemp, avgWindSpeed, avgHumidity, avgPressure, date, icon, cardNumber);
    }
}

// find which weather icon to display
const weatherIcon = (weatherDescription) => {
    weatherDescription = weatherDescription.toLowerCase();
    switch (weatherDescription){
        case 'rain' || 'thunderstorm' || 'drizzle':
            return 'img/rain.png';
        case 'snow':
            return 'img/snowflake.png';
        case 'clear':
            return 'img/sun.png';
        case 'clouds':
            return 'img/cloud.png';
    }
}

// format date correctly
const formatDate = (date) => {
    let formattedDateArr = date.split(' ').splice(date[1], 1).join('')
        .split('-');
    let dateNoYear = [parseInt(formattedDateArr[1]), formattedDateArr[2]];
    switch (dateNoYear[0]) {
        case 1:
            dateNoYear[0] = 'January'
            break;
        case 2:
            dateNoYear[0] = 'February'
            break;
        case 3:
            dateNoYear[0] = 'March'
            break;
        case 4:
            dateNoYear[0] = 'April'
            break;
        case 5:
            dateNoYear[0] = 'May'
            break;
        case 6:
            dateNoYear[0] = 'June'
            break;
        case 7:
            dateNoYear[0] = 'July'
            break;
        case 8:
            dateNoYear[0] = 'August'
            break;
        case 9:
            dateNoYear[0] = 'September'
            break;
        case 10:
            dateNoYear[0] = 'October'
            break;
        case 11:
            dateNoYear[0] = 'November'
            break;
        case 12:
            dateNoYear[0] = 'December'
            break;
    }
    return dateNoYear.join(' ');
}

// builds html for each card
const buildCards = (cards, temp, windSpeed, humidity, pressure, date, icon, cardNumber) => {
    let subHeader = document.querySelector('.sub-header');
    subHeader.innerText = `Showing Weather in ${cards.city.name}, ${cards.city.country}`;
    let weatherCard = document.querySelector(`.weather-card-${cardNumber}`);
    weatherCard.innerHTML =
        `<div class="column weather-card">
			<!--top half of card-->
			<div class="row top-card">
				<div class="column align-center">
					<div class="row justify-center align-center" id="date">${date}</div>
					<div class="row icon-temp-row">
						<!--temperature column-->
						<div class="column align-center justify-center">
							<div class="row justify-center align-center img-wrapper">
								<img id="weather-icon" alt="weather icon" src=${icon}>
							</div>
							<p class="temperature">${temp}&deg;F</p>
							<p id="weather-description">${cards.list[cardNumber - 1].weather[0].main}</p>	
						</div>
					</div>
				</div>
			</div>
			<!--bottom half of card-->
			<div class="row bottom-card">
				<div class="column justify-center">
					 <p class="weather-property">Wind</p>
					 <p class="weather-property">Humidity</p>
					 <p class="weather-property">Pressure</p>
				</div>
				<div class="column justify-center">
					<p>${windSpeed} mph</p>
					<p>${humidity}%</p>
					<p>${pressure}</p>
				</div>
			</div>
		</div>`;
}

const formatMap = async (lat, lon) => {
    map.flyTo({
        center: ([lon, lat]),
        zoom: (9)
    })
}

// when button is clicked cards are created
searchBtn.addEventListener('click', async (e)=>{
    e.preventDefault();
    let coords = await geocode(searchInput.value, MAPBOX_ID);
    let lon = coords[0],
        lat = coords[1];
    const cards = await getWeatherData(lat, lon);
    formatWeatherProperties(cards);
    await formatMap(lat, lon);
});

// when map is clicked, weather is shown in that location
map.on('click',  async (e)=>{
    let lat = e.lngLat.lat,
        lon = e.lngLat.lng;
    const cards = await getWeatherData(lat, lon);
    formatWeatherProperties(cards);
    await formatMap(lat, lon);
});

// site is defaulted on san antonio weather
window.onload = async function(){
    const defaultCards = await getDefaultData();
    formatWeatherProperties(defaultCards);
}



