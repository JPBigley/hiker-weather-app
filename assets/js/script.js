var weatherURL = ""
var parkURL ="https://developer.nps.gov/api/v1/parks?limit=1&api_key=8rhE0zKdQhsoe0lbFkVxuqBk1zLZwzeuwo3D1MXL"

function getParkURL(){
    fetch('https://developer.nps.gov/api/v1/parks?limit=1&api_key=8rhE0zKdQhsoe0lbFkVxuqBk1zLZwzeuwo3D1MXL')
   .then (response => response.json())
   .then(data => {
    console.log(data.data[0].fullName);
    console.log(data.data[0].latitude);
    console.log(data.data[0].longitude);
   })
}

    getParkURL();