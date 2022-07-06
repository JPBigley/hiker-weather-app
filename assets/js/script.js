var searchCityInput = $("#search-city");
var searchCityButton = $("#search-city-button");

// Open Weather API Key
var apiKey = "377d677ec9c51941e2b7d5548195ff39";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

// Hitting enter while input is focused will trigger
// value added to search history
$(searchCityButton).on("submit", function () {
	event.preventDefault();

	// Grab value entered into search bar
	var searchValue = searchCityInput.val().trim();

	currentConditionsRequest(searchValue);
	searchCityInput.val("");
});

// Clicking the search button will trigger
// value added to search history
searchCityButton.on("click", function (event) {
	event.preventDefault();

	// Grab value entered into search bar
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
