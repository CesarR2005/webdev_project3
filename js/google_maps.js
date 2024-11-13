function initMap() {
  const iitTower = { lat: 41.8354, lng: -87.6278 };  

  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: iitTower,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControl: false  
  });

 
  const marker = new google.maps.Marker({
    position: iitTower,
    map: map,
    title: "IIT Tower"
  });


  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>IIT Tower</h3><p>Located in Chicago, IL</p>"
  });

 
  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });

  // Map features
  map.setOptions({
    styles: [
      { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
      { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }
    ],
    zoomControl: true,
    streetViewControl: true
  });
}
