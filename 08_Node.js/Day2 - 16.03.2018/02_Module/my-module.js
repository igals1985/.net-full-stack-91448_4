// Exporting a string from this module:
let myTextVal = "Hello All!";

// Exporting an object:
let myObjVal = {
    firstName: "Bob",
    lastName: "Alice"
};

// Exporting a function:
function myFuncVal() {
    console.log("myFuncVal");
    console.log(myTextVal); // Using the above string.
}

module.exports = {
    myTextKey: myTextVal,
    myObjKey: myObjVal,
    myFuncKey: myFuncVal
};