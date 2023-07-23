const API_KEY = "458b29e22cae000e2b83828bf1fbc891";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather #weather2");
    const city = document.querySelector("#weather #city");
    city.innerText = `${data.name}`;
    weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}ºC<br>`;
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
