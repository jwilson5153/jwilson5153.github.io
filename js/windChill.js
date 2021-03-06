/*INPUT: Temperature and Wind Speed from user
 *PROCESSING: Get parameters from user input and store as variables.
 * Determine if both parameters meet specifications and if so call the windChill function 
 *OUITPUT: Windchill for the user
 */
function doInputOutput() {
    //Obtain temperature in Farenheit and wind speed in miles per hour from user
    let t = parseFloat(document.getElementById("temperature").value);
    let s = parseFloat(document.getElementById("windspeed").value);
    //Decide if the specs have been met to calculate windchill. 
    if (t < 50 && s > 3) {
        //Call the windChill function if the specs have been met
        let windchill = windChill(t, s);
        //OUTPUT
        //Inform the user about the wind chill
        document.getElementById("output").innerHTML = "The windchill is " + windchill + " Farenheit";
    } else {
        //Inform the user if the specs have not been met.
        document.getElementById("output").innerHTML = "The temperature must be lower that 50 Farenheit and the windspeed must be more that 3 mph."
    }
}
//Use the windChill function to calculate the wind chill
function windChill(t, s) {
    let windchill = (35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
    //Limit windchill to 2 decimal places and return it
    windchill = windchill.toFixed(2);
    return windchill;
}