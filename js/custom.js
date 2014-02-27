$(document).ready(function(){
    console.log("Ready/Ran");
    $('.carousel').carousel();


        
});

var initialize = function(){
	    var styleOptions = [{"featureType":"water","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"color":"#f2f2f2"}]},{"featureType":"road","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]}]

		    var myOptions = {
		    zoom: 15,
		    center: new google.maps.LatLng(53.350293, 0.249681),
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    styles: styleOptions
		};

		var map = new google.maps.Map(document.getElementById('map'), myOptions);
		
		//var myLatLng = new google.maps.LatLng(-33.890542, 151.274856);
		  var marker = new google.maps.Marker({
		      position: new google.maps.LatLng(53.350293, 0.249681),
		      map: map,
		      title: 'We are Here!'
		  });
}
		  google.maps.event.addDomListener(window, 'load', initialize);