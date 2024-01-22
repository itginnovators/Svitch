
function initMap() {
	var map = new google.maps.Map(document.getElementById('marker-map'), {
		zoom: 3,
		center: { lat: 25.276987, lng: 55.296249 } // Set the initial center of the map
	});

	// Array of marker objects with their respective coordinates and titles
	var markers = [
		{ lat: 35.6895, lng: 51.3890, title: 'Factory Information' },
		{ lat: 24.8607, lng: 67.0011, title: 'Factory Information' },
		{ lat: 25.276987, lng: 55.296249, title: 'Factory Information' }
		// Add more markers as needed
	];

	// Loop through the markers array and add them to the map
	for (var i = 0; i < markers.length; i++) {
		var marker = new google.maps.Marker({
			position: { lat: markers[i].lat, lng: markers[i].lng },
			map: map,
			title: markers[i].title
		});
	}
}