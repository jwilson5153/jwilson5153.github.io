function testGCD() {
    var x = -24;
    var y = 472;
    var divisor = gcd(x, y);
    document.getElementById('outputDiv').innerHTML = divisor;
}
// Finds and returns the greatest common
// divisor of two integers a and b.
function gcd(a, b) {
    // Ensure a and b are not negative.
    a = Math.abs(a);
    b = Math.abs(b);

    // Ensure a is greater than or equal to b.
    if (a < b) {
        var swap = a;
        a = b;
        b = swap;
    }

    // Loop until the greatest common divisor is found.
    do {
        var r = a % b;
        a = b;
        b = r;
    } while (b != 0);

    return a;
}