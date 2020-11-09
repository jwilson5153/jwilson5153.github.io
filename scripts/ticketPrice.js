/*INPUT: Age or ticket purchaser and number of games they will attend
 *PROCESSING: Use the age and number of games to determine ticket price
 *OUITPUT: Price of each ticket
 */
 function ticketPrice() {
     //Delcare price variable
let price;
//Obtin age and gamesAttended vairables for user input
let age = parseInt(document.getElementById("age").value);
let gamesAttended = parseInt(document.getElementById("gamesAttended").value);
    if (age < 18) {
        if (gamesAttended < 6.0)
            price = 8.0;
        else if (gamesAttended < 11)
            price = 6.0;
        else(price = 5.0);
    } else if (age < 55) {
        if (gamesAttended < 11)
            price = 10.0;
        else price = 8.0;
    } else {
        if (gamesAttended <= 10)
            price = 8.0;
        else(price = 6.0);
    }

    //OUTPUT
    document.getElementById("output").innerHTML = "Your ticket price is $" + price;
}