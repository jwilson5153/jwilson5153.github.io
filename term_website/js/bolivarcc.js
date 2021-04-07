/* Turn off Weather Alerts */
function alertsOff() {
    document.getElementById("alerts").style = "display: none";
    document.getElementById("removealerts").style = "display: none";
    document.getElementById("header_banner").style = "display: none";
}
/* Provide current data */
let date = document.lastModified;

document.getElementById('lastModifiedDate').innerHTML = date;


/* Obtain Current Weather and 3 Day Forecast Data */
const offAlerts = `<button onclick="">
<span onclick="alertsOff()">&times;</span>
</button>`
const currentWeatherApiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&units=imperial&exclude=minutely,hourly&appid=2d519255bfe7a838f5984fa0bb3aa767`
fetch(currentWeatherApiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        //console.log(jsObject)
        const temperature = document.querySelector('#temperature');
        temperature.textContent = (jsObject.current.temp).toFixed();
        const humidity = document.querySelector('#humidity');
        humidity.textContent = (jsObject.current.humidity).toFixed();
        const description = document.querySelector('#description');
        description.textContent = (jsObject.current.weather[0].description);
        const imagesrc = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', description);
        if (localtest = "alerts" in jsObject) {
            const weather_alerts = document.querySelector('#alerts');
            weather_alerts.textContent = (jsObject.alerts[0].description);
            document.getElementById("header_banner").style.display = "block";
            document.getElementById("removealerts").style.display = "block";
        } else {
            document.getElementById("header_banner").style.display = "none";
            document.getElementById("removealerts").style.display = "none";
        }

        /*const weather_alerts = document.querySelector('#alerts');
        weather_alerts.textContent = "Wind Advisory!!!";*/
        let threeday = jsObject.daily;
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        for (let weekday = 0; weekday < 3; weekday++) {
            const d = new Date(threeday[weekday].dt * 1000);
            document.getElementById(`fDay${weekday+1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById(`fTemperature${weekday+1}`).textContent = Math.round(threeday[weekday].temp.day);
        }
    });

/* Obtain Local Event Data */
const eventsApiURL = `json/localEvents.json`
fetch(eventsApiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const events = jsonObject['events'];
        events.forEach(localEvent => {
            const eventCard = document.createElement("section");
            const eventData = document.createElement("section");
            const eventTitle = document.createElement("p");
            const eventLocation = document.createElement("p");
            const eventDate = document.createElement("p");
            const eventTime = document.createElement("p");
            const eventPurpose = document.createElement("p");
            const eventCards = document.querySelector(".eventCards");
            eventTitle.innerHTML = `${localEvent.title}`;
            eventLocation.innerHTML = `${localEvent.location}`;
            eventDate.innerHTML = `${localEvent.date}`;
            eventTime.innerHTML = `${localEvent.time}`;
            eventPurpose.innerHTML = `${localEvent.purpose}`;


            eventData.append(eventTitle);
            eventData.append(eventLocation);
            eventData.append(eventDate);
            eventData.append(eventTime);
            eventData.append(eventPurpose);
            eventCard.append(eventData);
            eventCards.append(eventCard);
        });
    })


/* Obtain advertisement data */
const advertisementApiURL = `json/advertisements.json`
fetch(advertisementApiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const advertisements = jsonObject['advertisements'];
        advertisements.forEach(advert => {

            const adCard = document.createElement("section");
            const adData = document.createElement("section");
            const tAdImage = document.createElement("figure");
            const adCity = document.createElement("p");
            const adCompany = document.createElement("p");
            const adSubject = document.createElement("p");
            const adCTA = document.createElement("p");
            const adWebsite = document.createElement("p");
            const adImage = document.createElement("img");
            const adCards = document.querySelector(".adCards");
            adCity.innerHTML = `${advert.city}`;
            adCompany.innerHTML = `${advert.company}`;
            adSubject.innerHTML = `${advert.subject}`;
            adCTA.innerHTML = `${advert.cta}`;
            adWebsite.innerHTML = `${advert.website}`;
            adImage.setAttribute("src", `${advert.image}`);
            adImage.setAttribute("alt", `${advert.company}` + ' logo');

            tAdImage.append(adImage);
            adData.append(adCity);
            adData.append(adCompany);
            adData.append(adSubject);
            adData.append(adCTA);
            adData.append(adWebsite);
            adCard.append(adData);
            adCard.append(tAdImage);
            adCards.append(adCard);
        });
    })
/* Cbtain Chamber Member Directory Data */
const cityDirectoryApiURL = `json/cityDirectory.json`
fetch(cityDirectoryApiURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const cityDirectory = jsonObject['members'];
        cityDirectory.forEach(business => {

            const dirCard = document.createElement("section");
            const dirData = document.createElement("section");
            const tDirImage = document.createElement("figure");
            const dirName = document.createElement("p");
            const dirAddress = document.createElement("p");
            const dirEmail = document.createElement("p");
            const dirWebsite = document.createElement("p");
            const dirDescription = document.createElement("p");
            const dirImage = document.createElement("img");
            const dirCards = document.querySelector(".dirCards");
            dirName.innerHTML = `${business.name}`;
            dirAddress.innerHTML = `${business.address}`;
            dirEmail.innerHTML = `${business.email}`;
            dirWebsite.innerHTML = `${business.website}`;
            dirDescription.innerHTML = `${business.description}`;
            dirImage.setAttribute("src", `${business.image}`);
            dirImage.setAttribute("alt", `${business.name}` + ' logo');

            tDirImage.append(dirImage);
            dirData.append(dirName);
            dirData.append(dirAddress);
            dirData.append(dirEmail);
            dirData.append(dirWebsite);
            dirData.append(dirDescription);
            dirCard.append(dirData);
            dirCard.append(tDirImage);
            dirCards.append(dirCard);

        });
    })

// List View
function listView() {
    document.getElementById("dir_grid").style.gridTemplateColumns = "auto";
}

// Grid View
function gridView() {
    document.getElementById("dir_grid").style.gridTemplateColumns = "repeat(auto-fit, minmax(400px, 1fr)";
}

// Thank You Page Response
/*function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));*/

var referrer = document.referrer;
console.log(referrer.includes("join"));
console.log(referrer.includes("contact"));
// Select form submit thank you message
/*var dynamicContent = getParameterByName('dc');
(function ($) {
    $(document).ready(function () {})(jQuery);*/

    if (referrer.includes("join") != false) {
        document.getElementById("join-form").style="display: block";
        console.log(join);
    }
   
    else if (referrer.includes("contact") != false) {
        document.getElementById("contact-form").style="display: block";
        console.log(contact);
    }


    else {
        document.getElementById("default-content").style="display: block";
    }
