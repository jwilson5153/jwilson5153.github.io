function getAnswer() {
    let answer = "not set";
    let compare = "";
    //INPUT: Use input from quiz taker for variables and operator
    let firstNumber = parseFloat(document.getElementById("Number1").value);
    let secondNumber = parseFloat(document.getElementById("Number2").value);
    let operator = document.getElementById("arithmetic").value;
    let guess = parseFloat(document.getElementById("quizGuess").value);
    //Processing: Calculate correct answer using the first and second number with the operator
    switch (operator) {
        case "+":
            answer = firstNumber + secondNumber;
            break;
        case "-":
            answer = firstNumber - secondNumber;
            break;
        case "*":
            answer = firstNumber * secondNumber;
            break;
        case "/":
            answer = firstNumber / secondNumber;
            break;
        default:
            answer = "Something went wrong";
            break;
    }
    //Processing: Compare to the guess answer
    //Processing: Provide Correct if the two answers match or Incorrect if they do not
    //let compare = "Something went wrong!";
    if (answer === guess) {
        compare = "Correct";
    } else if (answer != guess) {
        compare = "Incorrect";
    } else if (answer = "not set") {
        compare = "answer not set";
    }
    //OUTPUT
    document.getElementById("output").innerHTML = "Your answer is " + compare;
}
