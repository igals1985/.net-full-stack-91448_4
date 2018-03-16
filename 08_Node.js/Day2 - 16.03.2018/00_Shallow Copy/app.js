let obj1={
    num1:2, //val
    num2:{x:4}  //ref
};

let obj2={
    num1:obj1.num1, //val - copy creates a new value (no connection to obj1.num1)
    num2:obj1.num2  //ref- copy creates a pointer to same object in heap (connection to obj1.num2)
}

printBothVal();

//change on "obj2.num1" does not effect "obj1.num1" 
obj2.num1=8;
printBothVal();

//change on "obj2.num2.x" does effect "obj1.num2.x" 
obj2.num2.x=9;
printBothVal();

//change "obj2.num2" to reference to a new object, does not effect "obj1.num2" 
obj2.num2={x:11};
printBothVal();

function printBothVal(){
    console.log("obj1: ",JSON.stringify(obj1));
    console.log("obj2: ",JSON.stringify(obj2));
    console.log("_______________________");
}


