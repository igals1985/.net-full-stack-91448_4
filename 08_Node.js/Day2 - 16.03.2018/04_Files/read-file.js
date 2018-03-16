var fs = require("fs");  //fs = file-system

// "readFile" - built in function in "fs", and gets the following parameters:
//      1)path - string
//      2)options Either the encoding for the result - string
//      3)callback: (err: NodeJS.ErrnoException, data: string) => void


fs.readFile("./data/myAppendFile.txt", "utf-8", function(err, data){
	// data will be sent as a string.
	console.log(data);
});


fs.readFile("./data/noSuchFile.txt", "utf-8", function(err, data){
	// data will be sent as a string.
	console.log("err.code " + err.code);
});


// Read json:
var p = require("./data/person.json"); // Will return object
console.log(p.firstName + " " + p.lastName);