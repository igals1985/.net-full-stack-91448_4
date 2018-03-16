var fs = require("fs");  //fs = file-system (built-in inside node global object)

if (!fs.existsSync("./data")) { 
	fs.mkdirSync("./data"); // create a directory
}

//Asynchronously writes data to a file, replacing the file if it already exists
//Async writing, thus we can't be sure what will be written exactly:
fs.writeFile("./data/myWriteFile.txt", "Hello All!");
fs.writeFile("./data/myWriteFile.txt", "This is the second line");
fs.writeFile("./data/myWriteFile.txt", "bye bye...");

// Sync writing, thus will write only the last line:
fs.writeFileSync("./data/myWriteFileSync.txt", "Hello All!");
fs.writeFileSync("./data/myWriteFileSync.txt", "This is the second line");
fs.writeFileSync("./data/myWriteFileSync.txt", "bye bye...");

// Async appending, thus will add each line:
fs.appendFile("./data/myAppendFile.txt", "Hello All!");
fs.appendFile("./data/myAppendFile.txt", "This is the second line");
fs.appendFile("./data/myAppendFile.txt", "bye bye...");

// Sync appending, thus will add each line:
fs.appendFileSync("./data/myAppendFileSync.txt", "Hello All!");
fs.appendFileSync("./data/myAppendFileSync.txt", "This is the second line");
fs.appendFileSync("./data/myAppendFileSync.txt", "bye bye...");


// Writing JSON:
var p = {
	firstName: "Bob",
	lastName: "Alice"
};
fs.writeFile("./data/person.json", JSON.stringify(p));



// Note: writing p as is will write the string "[object Object]"