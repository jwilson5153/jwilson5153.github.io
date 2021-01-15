/*INPUT: User inputs loan mount (principal), annual interest rate, number of years, payments per year, 
 *number of payments paid to date
 *PROCESSING:
 *OUITPUT:  Payment, Payoff amount
 */
function doPayment() {
    let payment = computePayment()
    //OUTPUT
    document.getElementById("payment").innerHTML = "$" + payment;
}

function doBalance() {
    let payOff = computeBalance();
    //OUTPUT
    document.getElementById("payOff").innerHTML = "$" + payOff;
}


function computePayment() {
    let ppr = parseFloat(document.getElementById("periodsPerYear").value);
    let a = parseFloat(document.getElementById("borrowedAmt").value);
    let r = (parseFloat(document.getElementById("annualIntRate").value)) / ppr;
    let n = ppr * (parseFloat(document.getElementById("numYears").value));
    let p = ((a * r) / (1 - Math.pow((1 + r), -n))).toFixed(2);
    return p;
}

function computeBalance() {
    let ppr = parseFloat(document.getElementById("periodsPerYear").value);
    let a = parseFloat(document.getElementById("borrowedAmt").value);
    let d = parseFloat(document.getElementById("paymentsPaidToDate").value);
    let r = (parseFloat(document.getElementById("annualIntRate").value)) / ppr;
    let n = ppr * (parseFloat(document.getElementById("numYears").value));
    let p = (a * r) / (1 - Math.pow((1 + r), -n));
    let b = (a * Math.pow((1 + r), d) - (p * (Math.pow((1 + r), d) - 1) / r)).toFixed(2);
    return b;
}