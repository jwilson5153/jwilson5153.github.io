/*INPUT: Temperature and Wind Speed from user
 *PROCESSING: Get parameters from user input and store as variables.
 * Determine if both parameters meet specifications and if so call the windChill function 
 *OUITPUT: Windchill for the user
 */
function doInputOutput() {
    //Obtain temperature in Farenheit and wind speed in miles per hour from user
    let t = parseInt(document.getElementById("temperature").value);
    let s = parseInt(document.getElementById("windspeed").value);
    if (t < 50 && s > 3) {
        windChill(t, s)
    } else {
        document.getElementById("output").innerHTML = "The temperature must be lower that 50 Farenheit and the windspeed bust be more that 3 mph."
    }

}

function windChill(t, s) {
    let windchill = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16).toFixed(2);
        //OUTPUT
        document.getElementById("output").innerHTML = "The windchill is " + windchill + " Farenheit";
    }