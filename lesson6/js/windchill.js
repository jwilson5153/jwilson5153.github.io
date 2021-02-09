// 
//
// Obtain the ambient air temperature
let t = parseInt(document.getElementById("temp").innerText);
// Obtain the windspeed
let s = parseInt(document.getElementById("speed").innerText);

//Calculate the windchill 
let wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
wc = wc.toFixed(0);
// Input Wind Chill to webpage
if ((t > 50) || (s < 3)) {
    document.getElementByID("chill").innerHTML = "NA";
} else {
    document.getElementById("chill").innerHTML = wc;
}