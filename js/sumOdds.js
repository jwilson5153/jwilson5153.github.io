function sumOdds() {
    //INPUT: Use input from user,"number1", to select "endingNumber", declare and set the value of the 
    //variable "endingNumber" with "number1".
    //Declare "number" which is the number that counts from 1 to the 
    //Declare the variable "sumOdd" which will be the final answer.
    let endingNumber = document.getElementById("Number1").value;
    let number = 1;
    let sumOdd = 0;
    //PROCESSING: Use a while loop to iterate from "number" to "endingNumber" and add each odd number to "sumOdd".
    while (number <= endingNumber) {
        if (number % 2 != 0) {
            sumOdd = sumOdd + number;
        }
        number += 1;
    }



    //OUTPUT:
    document.getElementById("output").innerHTML = "The sum of odd numbers is " + sumOdd;
}
