
let btn = document.querySelector('.get-location-btn');

function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
        coords = position.coords;
        console.log(coords);


    let latitude = coords.latitude;
    let longitude = coords.longitude;

    let path = 'https://api.openweathermap.org/data/2.5/weather?lat=/' + latitude + '/' + longitude
    let link = document.querySelector('.link');
    link.innerHTML = '<a href="' + path + '">ваше местоположению</a>';
    
    });

}

btn.addEventListener('click', getLocation);


let map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([0, 0]),
        zoom: 10
    })
});
