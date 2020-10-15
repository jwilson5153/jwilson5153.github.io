/* Defining Table
 INPUT:  Get number of pounds - x 
 PROCESSING-1: Convert pounds to kilograms by dividing total pounds by 2.205
 PROCESSING: Round result to 1 decimal place by 
 OUTPUT: Display kilograms on the document
*/ 


function poundsToKilograms() {
	//INPUT get the number of pounds
	 let x = parseFloat(document.getElementById('number1').value);
	 let y = 2.205
	//PROCESSING-1 divide the # of lbs by 2.205
	 let kiloMass = x / y;
	//PROCESSING-2 round the result to one digit after the decimal
	 let digits = 1;
	 let multiplier = Math.pow(10, digits);
	 kiloMass = Math.round(kiloMass * multiplier) / multiplier;
	 //OUTPUT
	 document.getElementById('output').innerHTML = " " + kiloMass + " " + " kilograms";
}