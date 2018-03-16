
// Importing our module:
var sub1 = require("./sub1.js"); // ./ means same directory as current file.
var sub2 = require("./sub2.js");


//-------------------REF-------------

sub2.testSub1WithSub2();  //3

//change on "myNum1.num" does effect "myNum1.num" in the "./sub1.js" file
sub1.myFunc1();  //3
sub1.myNum1.num=5;
sub1.myFunc1();  //5

sub2.testSub1WithSub2();  //5

//change "myNum1" to reference to a new object, does not effect "myNum1" in the "./sub1.js" file
sub1.myNum1={num:6};
sub1.myFunc1();  //5
console.log(sub1.myNum1.num);  //6

//-------------------VAL-------------

//change on "myNum2" does not effect "myNum2" in the "./sub1.js" file
sub1.myFunc2(); //3
sub1.myNum2=5;
sub1.myFunc2(); //3



