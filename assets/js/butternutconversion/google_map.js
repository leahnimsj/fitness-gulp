var google;function init(){var e=new google.maps.LatLng(40.69847032728747,-73.9514422416687),l={zoom:7,center:e,scrollwheel:!1,styles:[{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]},t=document.getElementById('map'),a=new google.maps.Map(t,l),i=['Brooklyn'];for(var s=0;s<i.length;s++)$.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+i[s]+'&sensor=false',null,function(e){var l=e.results[0].geometry.location,t=new google.maps.LatLng(l.lat,l.lng);new google.maps.Marker({position:t,map:a,icon:'images/loc.png'})})}google.maps.event.addDomListener(window,'load',init)