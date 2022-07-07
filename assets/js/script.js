var searchCityInput = $("#search-city");
var searchCityButton = $("#search-city-button");

// Open Weather API Key
var apiKey = "377d677ec9c51941e2b7d5548195ff39";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

// Get the current weather for the city entered
searchCityButton.on("click", function (event) {
	event.preventDefault();
	var city = searchCityInput.val();
	var queryUrl = apiUrl + city + "&appid=" + apiKey;
	$.ajax({
		url: queryUrl,
		method: "GET",
	}).then(function (response) {
		var cityName = response.name;
		var temp = response.main.temp;
		var tempF = Math.floor((temp - 273.15) * 1.8 + 32);
		var weatherDesc = response.weather[0].description;
		var weatherIcon = response.weather[0].icon;
		var weatherIconUrl = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";
		var weatherResults = $("#weather-results");
		weatherResults.empty();
		// append the city name, temperature, weather description, and weather icon to the weather results div
		weatherResults.append("<p>City: " + cityName + "</p>" + "<p>Temperature: " + tempF + "&#xb0;</p>" + "<p>Conditions: " + weatherDesc + "</p>" + "<p><img src=" + weatherIconUrl + "></p>");
	});
});

var weatherURL = "";
var parkURL = "https://developer.nps.gov/api/v1/parks?limit=1&api_key=8rhE0zKdQhsoe0lbFkVxuqBk1zLZwzeuwo3D1MXL";

function getParkURL() {
	fetch("https://developer.nps.gov/api/v1/parks?limit=1&api_key=8rhE0zKdQhsoe0lbFkVxuqBk1zLZwzeuwo3D1MXL")
		.then((response) => response.json())
		.then((data) => {
			console.log(data.data[0].fullName);
			console.log(data.data[0].latitude);
			console.log(data.data[0].longitude);
		});
}

getParkURL();
