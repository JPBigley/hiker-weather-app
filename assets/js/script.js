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
    var parkqueryUrl = 'https://developer.nps.gov/api/v1/parks?limit=467&api_key=8rhE0zKdQhsoe0lbFkVxuqBk1zLZwzeuwo3D1MXL&q="city:' + city +'"';
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
             
$.ajax({
    url: parkqueryUrl,
    method: 'GET',

})
  .then(function (parkResponse){
    var parkName = parkResponse.data[0].fullName
    var parkName2 = parkResponse.data[1].fullName
    var parkName3 = parkResponse.data[2].fullName
    var parkDescription = parkResponse.data[0].description
    var parkDescription2 = parkResponse.data[1].description
    var parkDescription3 = parkResponse.data[2].description
    var parkResults = $('#close-hike');
    var parkResults2 = $('#2nd-hike');
    var parkResults3 = $('#3-hike"');
    parkResults.empty();
    parkResults.append("<p>Name: " +parkName, "<p>" + "<p>Description:" +parkDescription);
    parkResults2.empty();
    parkResults2.append("<p>Name: " +parkName2, "<p>" + "<p>Description:" +parkDescription2);
    parkResults3.empty();
    parkResults3.append("<p>Name: " +parkName3, "<p>" + "<p>Description:" +parkDescription3);

})
	});
});

