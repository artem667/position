navigator.geolocation.getCurrentPosition(function(position) {
    coords = position.coords;
    console.log(coords);


let latitude = coords.latitude;
let longitude = coords.longitude;

let path = 'https://api.openweathermap.org/data/2.5/weather?lat=/' + latitude + '/' + longitude
let link = document.querySelector('.link');
link.innerHTML = '<a href="' + path + '">ваше местоположению</a>';
});
