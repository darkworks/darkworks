// get zip code via latitide and longtiude
// Jsfiddle :: https://jsfiddle.net/dbtuzvrs/

var latlng = new google.maps.LatLng(-34.397, 150.644);
geocoder = new google.maps.Geocoder();

    geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                for (j = 0; j < results[0].address_components.length; j++) {
                    if (results[0].address_components[j].types[0] == 'postal_code')
                        alert("Zip Code: " + results[0].address_components[j].short_name);
                }
            }
        } else {
            alert("Geocoder failed due to: " + status);
        }
    });
