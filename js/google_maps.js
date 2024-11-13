function initMap() {
  const iitTower = { lat: 41.8354, lng: -87.6278 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: iitTower,
    mapTypeId: 'satellite', 
    styles: [
      {
        "elementType": "labels",
        "stylers": [
          { "visibility": "on" }
        ]
      }
    ]
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

  // Additional features //
  map.setOptions({
    zoomControl: true,
    streetViewControl: true
  });
}
