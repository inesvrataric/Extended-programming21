// Set API token
mapboxgl.accessToken = 'pk.eyJ1IjoiaW5lczEzMzMzMyIsImEiOiJja3F0Z2Fta3cwNmQxMm9xdXE2Z3U4ZHplIn0.6FQ1poOdas_O_XXH-PMPpw';

// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/ines133333/ckqtgf0k100ug18pjutwky2e5',
  center: [10.00000, 50.000000],
  zoom: 1,
});

//Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

var openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';
var openWeatherMapUrlApiKey = 'eac29c0f18e99a8206066c51f0a4b790';

var cities = [
	{
		name: 'The Hague',
		coordinates: {

			lat: 52.0706,
			lon: 4.3129
		} 
	},
	{
		name: 'Zagreb',
		coordinates: {
			lat: 45.815399,
			lon:  15.966568
		}
	},
]

window.onload=function() {
	cities.forEach(function(city, index) {
		var request = openWeatherMapUrl + "?" + "appid=" + openWeatherMapUrlApiKey + "&lon=" + city.coordinates.lon + "&lat=" + city.coordinates.lat;

		fetch(request)
			.then(function(response) {
				if(!response.ok) throw Error(response.statustext);
				return response.json();
			})
			.then(function(response) {
				console.log(response.weather[0].icon, city);
				var icon = response.weather[0].icon;
				var description = response.weather[0].description;
				var temperature = Math.floor(response.main.temp - 273.25);
				var imageSrc = 'http://openweathermap.org/img/w/' + icon + '.png';
				document.getElementById(`city${index+1}-img`).setAttribute('src', imageSrc);
				document.getElementById(`description${index+1}`).innerHTML=description;
				document.getElementById(`temperature${index+1}`).innerHTML=temperature + " °C";
			})
			.catch(function (error) {
				console.log('There was an error:', error);
			});
	});
};
