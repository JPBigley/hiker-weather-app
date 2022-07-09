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
	var parkqueryUrl = `https://developer.nps.gov/api/v1/parks?limit=467&api_key=8rhE0zKdQhsoe0lbFkVxuqBk1zLZwzeuwo3D1MXL&q="city: ${city}"`;
	console.log(parkqueryUrl);
	$.ajax({
		url: queryUrl,
		method: "GET",
	}).then(function (response) {
		var cityName = response.name;
		var temp = response.main.temp; // temp in Kelvin
		var tempF = Math.floor((temp - 273.15) * 1.8 + 32); // Convert Kelvin to Fahrenheit
		var weatherDesc = response.weather[0].description; // Get the weather description
		var weatherIcon = response.weather[0].icon; // Get the icon code
		var weatherIconUrl = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";
		var weatherResults = $("#weather-results");
		weatherResults.empty();
		// append the city name, temperature, weather description, and weather icon to the weather results div
		weatherResults.append(
			"<p><strong>City:</strong> " +
				cityName +
				"&nbsp; | &nbsp;</p>" +
				"<p><strong>Temperature:</strong> " +
				tempF +
				"&#xb0; &nbsp; | &nbsp;</p>" +
				"<p><strong>Conditions:</strong> " +
				weatherDesc +
				"&nbsp; | &nbsp;</p>" +
				"<p><img src=" +
				weatherIconUrl +
				"></p>"
		);

		$.ajax({
			url: parkqueryUrl,
			method: "GET",
		}).then(function (parkResponse) {
			console.log(parkResponse);
			let i = 0;
			Object.values(parkResponse.data).map((data1) => {
				console.log(data1);
				if (i === 0) {
					$("#close-hike").append("<p>Name: " + data1.fullName, "<p>" + "<p>Description:" + data1.description);
				} else if (i === 1) {
					$("#2nd-hike").append("<p>Name: " + data1.fullName, "<p>" + "<p>Description:" + data1.description);
				} else if (i === 2) {
					$('#3-hike"').append("<p>Name: " + data1.fullName, "<p>" + "<p>Description:" + data1.description);
				}

				i += 1;
			});
		});
	});
});
