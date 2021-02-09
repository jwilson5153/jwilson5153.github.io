// Find day of week to turn banner on and off

let d = new Date();

let n = d.getDay();
let element = document.getElementById('banner');
if (n === 5) {
    element.classList.toggle('banner');
}