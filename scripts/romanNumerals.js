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
            c = "CCC";
            break;
        case "4":
            c = "CD";
            break;
        case "5":
            c = "D";
            break;
        case "6":
            c = "DC";
            break;
        case "7":
            c = "DCC";
            break;
        case "8":
            c = "DCCC";
            break;
        case "9":
            c = "CM";
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
            x = "XXX";
            break;
        case "4":
            x = "XL";
            break;
        case "5":
            x = "L";
            break;
        case "6":
            x = "LX";
            break;
        case "7":
            x = "LXX";
            break;
        case "8":
            x = "LXXX";
            break;
        case "9":
            x = "XC";
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
            i = "III";
            break;
        case "4":
            i = "IV";
            break;
        case "5":
            i = "V";
            break;
        case "6":
            i = "VI";
            break;
        case "7":
            i = "VII";
            break;
        case "8":
            i = "VIII";
            break;
        case "9":
            i = "IX";
            break;
    }
    let romanNumeral = M + C + X + I;
    document.getElementById('output').innerHTML = romanNumeral;
}