/* Defining Table
 * Input: no user input
 * Processing: Test the addEnds and getMiddle functions by calling them.
 * Output: The values returned from the addEnds and getMiddle functions.
 */
function test() {
    let list1 = [17, 8, 9, 5, 20];
    let list2 = [12, 4, 8, 15, 17, 5, 20, 11];

    // Test the addEnds function by calling it two times.
    let sum1 = addEnds(list1);
    let sum2 = addEnds(list2);

    // Test the getMiddle function by calling it two times.
    let mid1 = getMiddle(list1);
    let mid2 = getMiddle(list2);

    // Build a string to display to the user.
    let output =
        "Sum of array 1 first and last values = " + sum1 + '<br>' +
        "Sum of array 2 first and last values = " + sum2 + '<br>' +
        "Middle element of array 1 = " + mid1 + '<br>' +
        "Middle element of array 2 = " + mid2;

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;
}

function addEnds(list) {
    let sum = list[0] + list[list.length - 1];

    return sum;
}

function getMiddle(list) {
    if (list.length % 2 == 0) {
        mid = (list[list.length / 2 | 0] + list[(list.length / 2 | 0) - 1]) / 2;
    } else {
        mid = list[list.length / 2 | 0];
    }
    return mid;
}