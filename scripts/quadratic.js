/* Input: Three coefificients from a quadratic equation.
 * Processing: If they exist, compute the root or roots of the equation
 * Output:
 *     The root or roots of the equation or
 *     "undefined" if they don't exist.
 */
function quadratic() {
    // Get three coefficients a, b, and c
    // for a quadratic equation from the user.
    let a = parseFloat(document.getElementById("aInput").value);
    let b = parseFloat(document.getElementById("bInput").value);
    let c = parseFloat(document.getElementById("cInput").value);
    // Compute the root or roots of the quadratic equation if they exist.
    let discr = b * b - 4 * a * c;
    let root1, root2;
    if (discr >= 0) {
        let sq = Math.sqrt(discr);
        root1 = (-b + sq) / (2 * a);
        root2 = (-b - sq) / (2 * a);
    }
    // Display the roots to the user.    
    document.getElementById("output").innerHTML = root1 + ' ' + root2;
}