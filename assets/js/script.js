var searchCityInput = $("#search-city");
var searchCityButton = $("#search-city-button");

// Open Weather API Key
var apiKey = "377d677ec9c51941e2b7d5548195ff39";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

searchCityButton.on("click", function (event) {
	event.preventDefault();
	var searchValue = searchCityInput.val().trim();
	currentConditionsRequest(searchValue);
	searchCityInput.val("");
});

function getWeather(searchValue) {
	fetch(apiUrl + "&q=" + searchValue + "&appid=" + apiKey)
		.then((response) => response.json())
		.then((data) => console.log(data));
}

getWeather();
