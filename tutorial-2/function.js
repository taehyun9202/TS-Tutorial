"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("resutl: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
//type void and undefined in function
function voidfn() {
    // doesnt have return or return nothing
}
function undeffn() {
    // return nothing
    return;
}
// let combineValues: Function;
let combineValues; // is function takes two number args and return nubmer
// combineValues = printResult;
combineValues = add;
console.log(combineValues(2, 9));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
