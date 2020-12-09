/* Defining Table
 * Input: no user input
 * Processing: Test the countEvens and multiply functions by calling them.
 * Output: The values returned from the countEvens and multiply functions.
 */
function test() {
    let list1 = [17, 8, 9, 5, 20];
    let list2 = [12, 4, 8, 15, 17, 5, 20, 11];

    // Test the countEvens function by calling it two times.
    let count1 = countEvens(list1);
    let count2 = countEvens(list2);

    // Test the multiply function by calling it two times.
    let mult1 = multiply(list1, 3);
    let mult2 = multiply(list2, 2);

    // Build a string to display to the user.
    let output =
        "# of even numbers in list1 [ " + count1 + '<br>' +
        "# of even numbers in list2 [ " + count2 + '<br>' +
        "Product of each list element and the list length is [ " + mult1 + '<br>' +
        "Product of each list element and the list length is [ " + mult2;

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;
}

function countEvens(list) {
    let count = 0;
    for (i = 0; i <= list.length - 1; i++) {
        if ((list[i] % 2) == 0) {
            count = count + 1;
        }
    }
    return count;
}

function multiply(list, multiplier) {
    let product = [];
    for (i = 0; i <= list.length - 1; i++) {
        product[i] = list[i] * multiplier;
    }
    return product;
}