/* Defining Table
 INPUT:  Get weather choice 
  PROCESSING: Match weather choice to shoe type 
 OUTPUT: Display recommended whoe type
*/ 


function getShoes() {
    let shoes = "error";
	//INPUT get weather choice from combo box
     let weather = document.getElementById('weather').value;
    //PROCESSING Select the choice recommendation that corresponds to the weather
	if (weather === "hot") {
        shoes = "sandals";
    } else if (weather === "rain") {
        shoes = "galoshes";
    } else if (weather === "snow") {
        shoes = "boots";
    } else if (weather === "unknown") {
        shoes = "shoes";
    }   
     //OUTPUT
    document.getElementById("output").innerHTML = "Better wear " + shoes; 
}
