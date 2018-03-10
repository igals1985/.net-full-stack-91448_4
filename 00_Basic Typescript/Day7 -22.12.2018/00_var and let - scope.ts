/*
block scope - let can not be used outside the block
*/



/*
global section - is called when the current project is running the first time
global var and global let will be in the memory while the program is running
*/
/////////////////global section - main section of code/////////////////////


//var can be used before the declaration - but the value will be undefined
document.write(`<br/>before var declartion: 
v0: ${v0},v1: ${v1},v2: ${v2},v3: ${v3},v4: ${v4},v5: ${v5},v6: -<br/>`);

//let can not be used before the declaration 
document.write(`before let declartion: 
l0: - ,l1: -,l2: -,l3: -,l4: -,l5: -,l6: -<br/>`);

var v0: string = "v0";
let l0: string = "l0";



{


    document.write(`<br/>before var in simple block: 
v0: ${v0},v1: ${v1},v2: ${v2},v3: ${v3},v4: ${v4},v5: ${v5},v6: -<br/>`);


    document.write(`before let in simple block: 
l0:  ${l0} ,l1:  - ,l2: -,l3: -,l4: -,l5: -,l6: -<br/>`);

    var v1: string = "v1";
    let l1: string = "l1";


    document.write(`<br/>var in simple block: 
v0: ${v0},v1: ${v1},v2: ${v2},v3: ${v3},v4: ${v4},v5: ${v5},v6: -<br/>`);


    document.write(`let in simple block: 
l0:  ${l0} ,l1:  ${l1} ,l2: -,l3: -,l4: -,l5: -,l6: -<br/>`);
}


//v2 == undefined -> true
//v2 is undefined -> undefined is false -> !false -> true
if (!v2) {
    var v2: string = "v2";
    let l2: string = "l2";


    document.write(`<br/>var in if block: 
v0: ${v0},v1: ${v1},v2: ${v2},v3: ${v3},v4: ${v4},v5: ${v5},v6: -<br/>`);


    document.write(`let in if block: 
l0:  ${l0} ,l1:  - ,l2: ${l2},l3: -,l4: -,l5: -,l6: -<br/>`);
}

while (!v3) {
    var v3: string = "v3";
    let l3: string = "l3";
    document.write(`<br/>var in while block: 
v0: ${v0},v1: ${v1},v2: ${v2},v3: ${v3},v4: ${v4},v5: ${v5},v6: -<br/>`);


    document.write(`let in while block: 
l0:  ${l0} ,l1:  - ,l2:  -,l3: ${l3},l4: -,l5: -,l6: -<br/>`);

}


do {
    var v4: string = "v4";
    let l4: string = "l4";

    document.write(`<br/>var in do block: 
v0: ${v0},v1: ${v1},v2: ${v2},v3: ${v3},v4: ${v4},v5: ${v5},v6: -<br/>`);


    document.write(`let in do block: 
l0:  ${l0} ,l1:  - ,l2: -,l3: -,l4: ${l4},l5: -,l6: -<br/>`);
} while (false);


for (let l5: string = "v5"; !v5;) {
    var v5: string = "v5";

    document.write(`<br/>var in for block: 
v0: ${v0},v1: ${v1},v2: ${v2},v3: ${v3},v4: ${v4},v5: ${v5},v6: -<br/>`);


    document.write(`let in for block: 
l0:  ${l0} ,l1:  - ,l2: -,l3: -,l4: - ,l5: ${l5},l6: -<br/>`);
}



func("Ori");
// param = "param"; -->Error - can not access the function's param


document.write(`<br/>after var declartion: 
v0: ${v0},v1: ${v1},v2: ${v2},v3: ${v3},v4: ${v4},v5: ${v5},v6: -<br/>`);


document.write(`after let declartion: 
l0:  ${l0} ,l1: -,l2: -,l3: -,l4: -,l5: -,l6: - <br/>`);



/*
function section - can be called a few times
function section will not be invoked until we create a call to the function
every function that we add to this section is hoisted and known in the upper section
*/
////////////////////function section///////////////////////////////////////
function func(param: string): void {
    //redecalre the global var & let as local var & let
    var v0: string = "paramV0";
    let l0: string = "paramL0";


    //declare local var & let
    var v6: string = "paramV6";
    let l6: string = "paramL6";
    param = "param";


   // document.write(`<br/>in function var declartion: 
   // v0: ${v0},v1: ${v1},v2: ${v2},v3: ${v3},v4: ${v4},v5: ${v5},v6: ${v6}<br/>`);


    //document.write(`in function let declartion: 
//0:  ${l0} ,l1: -,l2: -,l3: -,l4: -,l5: -,l6: ${l6}<br/>`);
}