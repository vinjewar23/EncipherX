function initMap() {
  var location = { lat: 37.7749, lng: -122.4194 }; // San Francisco
  var map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 12,
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
