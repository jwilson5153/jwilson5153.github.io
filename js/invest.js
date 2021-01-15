/*INPUT: User inputs Amount invested, annual rate, number of years, periods per year
 *PROCESSING: doFV obtains inputs from user and passes data to computeFutureValue
 * computeFutureValue computes the future value and displays it for the user
 *OUITPUT: Future Value
 */
function doFV() {
    let a = parseFloat(document.getElementById("investAmt").value);
    let y = parseFloat(document.getElementById("numYears").value);
    let p = parseFloat(document.getElementById("periodsPerYear").value);
    let n = y * p;
    let r = (parseFloat(document.getElementById("annualRate").value)) / p;
    let futureValue = computeFutureValue(a, r, n);
    //OUTPUT
    document.getElementById("output").innerHTML = "$" + futureValue;
}

function computeFutureValue(a, r, n) {
    let futureValue = (a * Math.pow((1 + r), n)).toFixed(2);

    return futureValue;
}