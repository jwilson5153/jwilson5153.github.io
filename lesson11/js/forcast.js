// Page selector
if (document.getElementById("preston")){
    fcityID = 5604473;
    cityID = 5604473;
  }
  else if (document.getElementById("sodasprings")){
    fcityID = 5678757;
    cityID = 5678757;
  }
  else if (document.getElementById("fishhaven")){
    fcityID = 5677822;
    cityID = 5677822;
  }

  

let fappid = `2d519255bfe7a838f5984fa0bb3aa767`;
const fapiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${fcityID}&units=imperial&appid=${fappid}`;
fetch(fapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject);
        var fiveday = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        for (let day = 0; day < fiveday.length; day++) {
            const d = new Date(fiveday[day].dt_txt);
            const image_src = `https://openweathermap.org/img/w/${fiveday[day].weather[0].icon}.png`;
            const image_alt = fiveday[day].weather[0].description;


            //console.log(image_src);

            document.getElementById(`day${day+1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById(`temperature${day+1}`).textContent = Math.round(fiveday[day].main.temp);
            document.getElementById(`imagesrc${day+1}`).setAttribute('src', image_src);
            document.getElementById(`imagesrc${day+1}`).setAttribute('alt', image_alt);
        }
    });

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