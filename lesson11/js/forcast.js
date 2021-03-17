let fcityID = 5604473;
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