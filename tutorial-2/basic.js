"use strict";
// console.log(typeof 1, typeof 1.5, typeof -10);
// console.log(typeof "hiasd1212");
// console.log(typeof true, typeof false);
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = "10";
const number2 = 2.6;
const printResult = true;
const resultPhrase = "Result is: ";
add(+number1, number2, printResult, resultPhrase);
