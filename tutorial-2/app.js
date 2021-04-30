"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Tyler Nam";
if (typeof userInput === "string") {
    userName = userInput;
    console.log(userName);
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An Error Occured", 500);
