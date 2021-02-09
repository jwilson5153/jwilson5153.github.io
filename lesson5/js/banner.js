// Find day of week to turn banner on and off

let d = new Date();
let n = d.getDay();
if (n === 5) {
    document.getElementById("banner").style.display = "block";
} else {
    document.getElementById("banner").style.display = "none";
}