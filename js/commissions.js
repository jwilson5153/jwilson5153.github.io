/*INPUT: Get sales total from user
 *PROCESSING: Find the commision based the amount of sales
 *OUITPUT: The commision amount
 */
function findCommission() {
    let sales = parseFloat(document.getElementById("sales").value);
    let corate = 0;
    if (sales < 300) {
        corate = 0;
    } else if (sales < 600) {
        corate = 0.02;
    } else if (sales < 1000) {
        corate = 0.025;
    } else {
        corate = 0.03;
    }

    //Calculate the commision
    let commission = sales * corate;
    let earnings = sales + commission;
    //Change the earnings to have 2 decimals
    let digits = 2;
    let multiplier = Math.pow(10, digits);
    earnings = Math.round(earnings * multiplier) / multiplier;
    earnings = earnings.toFixed(2);
    //Message the use about the commision amount
    document.getElementById('output').innerHTML = "Your earnings are $" + earnings;
}