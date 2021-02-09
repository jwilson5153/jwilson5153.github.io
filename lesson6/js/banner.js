// Find day of week to turn banner on and off

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

if (n === 'Friday') {
    document.getElementById('banner').className = 'banner';
} else {
    document.getElementById('banner').classList.remove('banner');
    document.getElementById('banner').className = 'bannernone';
}