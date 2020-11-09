/*INPUT: Integer and phrase from user
 *PROCESSING: Set variables for "number" of times to output the phrase
 *OUITPUT: Show the user the phrase the number of tiems corresponding to the number they provided preceded by the number
 */
function getSunshine() {

    // Read input from user
    let b = parseInt(document.getElementById("number").value);
    let words = (document.getElementById("phrase").value);
    //Initialize "text"
    let text = "";
    for (let a = 1; a <= b; a++) {
        text += (a + " " + words + "<br>");
        //OUTPUT repeated
        document.getElementById("output").innerHTML = text;
    }
}