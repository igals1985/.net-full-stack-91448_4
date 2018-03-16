// Importing our module:
var myModule = require("./my-module.js"); // ./ means same directory as current file.

// Using the Module's properties: 
console.log(myModule.myTextKey);
console.log(myModule.myObjKey.firstName);

// Using the Module's function: 
myModule.myFuncKey();
