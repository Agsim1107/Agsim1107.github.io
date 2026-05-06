// Coordinates (Lutsen Mountains, Minnesota)
var lat = 47.6638;
var lon = -90.7133;

// Create map
var map = L.map('map').setView([lat, lon], 10);

// Add OpenStreetMap tiles
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap contributors'
    }
).addTo(map);

// Add marker
var marker = L.marker([lat, lon]).addTo(map);

// Initial popup
marker.bindPopup(
    "<b>The Hideaway</b><br>Loading weather..."
).openPopup();

// Fetch weather data
fetch("https://api.weather.gov/points/" + lat + "," + lon)

.then(function(res) {
    return res.json();
})

.then(function(data) {
    return fetch(data.properties.forecast);
})

.then(function(res) {
    return res.json();
})

.then(function(weather) {

    var current = weather.properties.periods[0];

    marker.setPopupContent(
        "<b>The Hideaway</b><br>" +
        current.temperature + "°F and " +
        current.shortForecast
    );

})

.catch(function(err) {

    marker.setPopupContent(
        "<b>The Hideaway</b><br>Weather unavailable"
    );

    console.log(err);

});