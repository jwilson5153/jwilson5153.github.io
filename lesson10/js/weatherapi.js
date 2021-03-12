let cityID = 5604473;
let appid = `2d519255bfe7a838f5984fa0bb3aa767`;
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${appid}`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  //  console.log(jsObject);
    // Weather Summary Temperature and Weather icon JSON load
    const temperature = document.querySelector('#temperature');
    temperature.textContent = (jsObject.main.temp).toFixed();
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
    // Weather Summary humidity JSON load
    const humidity = document.querySelector('#humidity');
    humidity.textContent = (jsObject.main.humidity).toFixed();
    // Weather Summary Wind Speed JSON load
    const windspeed = document.querySelector('#windspeed');
    windspeed.textContent = (jsObject.wind.speed).toFixed();
    // Weather Summary WindChill JSON load
    const windchill = document.querySelector('#windchill');
    windchill.textContent = (jsObject.main.feels_like).toFixed();
   });