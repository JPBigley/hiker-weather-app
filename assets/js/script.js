

  var parkqueryUrl = 'https://developer.nps.gov/api/v1/parks?limit=467&api_key=8rhE0zKdQhsoe0lbFkVxuqBk1zLZwzeuwo3D1MXL&q=<"city: Denve      
$.ajax({
    url: parkqueryUrl,
    method: 'GET',

}).then(function(response){
    var parkResults = $('#park-results');
    parkResults.empty();
    parkResults.append()
})
	
