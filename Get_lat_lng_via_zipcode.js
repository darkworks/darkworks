// Get Lat Lng via Zip Code 
$(document).ready(function(){
    var zipcode = 10001;   // NY
    $.ajax({
       url : "http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:"+zipcode+"&sensor=false",
       method: "POST",
       success:function(data){
          console.log(JSON.stringify(data));
           latitude = data.results[0].geometry.location.lat;
           longitude= data.results[0].geometry.location.lng;
            alert("Lat = "+latitude+"- Long = "+longitude);
       }
    });
});
