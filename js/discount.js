function discount() {
   
    //INPUT: Use input typed submission as "cusSubTotal" 
    let cusSubTotal = parseFloat(document.getElementById("cusSubTotal").value);
    //INPUT: Day input calculations
    let now = new Date();
    let month = now.getMonth();
    let dayOfMonth = now.getDate();
    //let dayOfWeek = now.getDay();
    let dayOfWeek = 3;
    //PROCESSING: If the the day of the week is Wednesday or Thursday and the cusSubTotal is greater than $50 subtract 10%
    //PROCESSING: Add 6% sales to the calculated the the cusSubTotal to obtain the amtDue
    if (dayOfWeek === 2 || 3 && cusSubTotal > 50) {
        cusSubTotal = cusSubTotal - cusSubTotal * .1;
    }
    let amtDue = cusSubTotal + cusSubTotal * .06;
    //PROCESSING: round the result to two digit after the decimal
	 let digits = 2;
     let multiplier = Math.pow(10, digits);
     amtDue = Math.round(amtDue * multiplier) / multiplier;
     amtDue = amtDue.toFixed(2);
    //OUTPUT
    document.getElementById("output").innerHTML = "Amount due is " + "$" + amtDue;
}
