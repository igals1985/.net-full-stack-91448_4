
// Importing our module:
var sub1Pointer = require("./sub1.js"); 



exports.testSub1WithSub2 = function() {
	console.log(sub1Pointer.myNum1.num);
};
