/*INPUT: 4 digit decimal year number
 *PROCESSING: Convert the decimal number to a Roman Numeral
 *OUITPUT: String with correct Ruman Numeral
 */
function findRomanNumerals() {
    let M;
    let C;
    let X;
    let I;
    let m = document.getElementById("number1").value;
    let c = document.getElementById("number2").value;
    let x = document.getElementById("number3").value;
    let i = document.getElementById("number4").value;
    switch (m) {
        case "0":
            M = "";
            break;
        case "1":
            M = "M";
            break;
        case "2":
            M = "MM";
            break;
    }
    switch (c) {
        case "0":
            C = "";
            break;
        case "1":
            C = "C";
            break;
        case "2":
            C = "CC";
            break;
        case "3":
            C = "CCC";
            break;
        case "4":
            C = "CD";
            break;
        case "5":
            C = "D";
            break;
        case "6":
            C = "DC";
            break;
        case "7":
            C = "DCC";
            break;
        case "8":
            C = "DCCC";
            break;
        case "9":
            C = "CM";
            break;
    }
    switch (x) {
        case "0":
            X = "";
            break;
        case "1":
            X = "X";
            break;
        case "2":
            X = "XX";
            break;
        case "3":
            X = "XXX";
            break;
        case "4":
            X = "XL";
            break;
        case "5":
            X = "L";
            break;
        case "6":
            X = "LX";
            break;
        case "7":
            X = "LXX";
            break;
        case "8":
            X = "LXXX";
            break;
        case "9":
            X = "XC";
            break;
    }
    switch (i) {
        case "0":
            I = "";
            break;
        case "1":
            I = "I";
            break;
        case "2":
            I = "II";
            break;
        case "3":
            I = "III";
            break;
        case "4":
            I = "IV";
            break;
        case "5":
            I = "V";
            break;
        case "6":
            I = "VI";
            break;
        case "7":
            I = "VII";
            break;
        case "8":
            I = "VIII";
            break;
        case "9":
            I = "IX";
            break;
    }
    let romanNumeral = M + C + X + I;
    document.getElementById('output').innerHTML = romanNumeral;
}