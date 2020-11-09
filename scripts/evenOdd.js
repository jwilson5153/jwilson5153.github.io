    /*INPUT: Integer from user.Get selected number from user and use it to declare and assign the variable "text".
     *PROCESSING: Determine if the integer is odd or even
     *OUITPUT: Message saying whether the integer is odd or even.
     */
    function evenOdd() {
        //Get selected number from user and use it to declare and assign the variable "text".
        let text = document.getElementById("number1").value;
        //Declare and assign variable "number".
        let number = parseInt(text);
        // Choose a message
        let message;
        if ((number % 2) != 0) {
            message = number + " is a odd integer";
        } else {
            message = number + " is an even integer";
        }
        //Display message in HTML.
        document.getElementById("output").innerHTML = "Your answer is " + message;
    }