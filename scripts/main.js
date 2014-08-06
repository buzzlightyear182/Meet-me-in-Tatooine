document.getElementById('geolocation_button').addEventListener('click', function() {

	if (navigator.geolocation) {
	  console.log("Browser accepts geolocation");
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	}

	function onSuccess(position){

	  var longitude = position.coords.longitude;
	  var latitude = position.coords.latitude;

	  document.getElementById("map").setAttribute("src","http://maps.googleapis.com/maps/api/staticmap?center="+latitude+","+longitude+"&zoom=14&size=600x400&markers=color:red%7Clabel:1%7C"+latitude+","+longitude);

	  var container = document.getElementById("location_info");
	  // var lat_html = container.createElement('p').innerHTML = "Latitude" + latitude;
	  // var long_html = container.createElement('p').innerHTML = "Longitude" + longitude;
	  // container.appendChild(lat_html);
	  // container.appendChild(long_html);

	  container.innerHTML = "Latitude: " + latitude + "<br>";
    container.innerHTML += "Longitude: " + longitude;

	};

	function onError(error){
	  console.log("Error " + error);
	};

});