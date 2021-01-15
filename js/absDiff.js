/*INPUT: Two numbers provided by user
 *PROCESSING: Subtract the second number from the first number and provide the abs value
 *OUITPUT: Positive value of the difference between two numbers 
 */
function absDiff() {
    //Get numbers from user
    let firstNumber = document.getElementById("number1").value;
    let secondNumber = document.getElementById("number2").value;
    //Compute absolute value of the difference
    let difference = Math.abs(firstNumber - secondNumber);



    //OUTPUT
    document.getElementById("output").innerHTML = "The absolute difference between " + firstNumber + " and " + secondNumber + " is " + difference;
}

function func1() {
    let c = "";
    let a = parseInt(document.getElementById('integerBox').value);
    let b = 100;
    while (b >= 0) {
        c += b + " ";
        b -= a;
    }

    document.getElementById('outputDiv').innerHTML = a + " " + b + " " + c;
}