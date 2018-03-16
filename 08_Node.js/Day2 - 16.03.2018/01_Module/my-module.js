// A module is one logic unit which can contain properties and functions.
// The module name is the file name.


// Exporting a property - string from this module:
exports.myText = "Hello All!";

// Exporting an property - object:
exports.myObj = {
	firstName: "Bob",
	lastName: "Alice"
};

// Exporting a function:
exports.myFunc = function() {
	console.log("myFunc");
	console.log(exports.myText); // Using the above exported string.
};