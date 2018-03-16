//json object - REF TYPE
let myNum1 = {num:3};

//number - VAL TYPE
let myNum2 = 3;


let myFunc1 = function() {
	console.log(myNum1.num);
};


let myFunc2 = function() {
	console.log(myNum2);
};


module.exports={
	myNum1:myNum1,
	myNum2:myNum2,
	myFunc1:myFunc1,
	myFunc2:myFunc2
}