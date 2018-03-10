
/////////////MAIN SECTION//////////////
let person1Name: string = "Yaniv";
let person1Age: number = 22;
let person1Weight: number = 60;

let person2Name: string = "Tzhahi";
let person2Age: number = 24;
let person2Weight: number = 55;

for (let i: number = 0; i < 2; i++) {
    document.write("in loop: " + i + "<br/>");
}

//ERROR
// document.write("after loop: " + i + "<br/>"); 


    let num1: number = getNum();
    document.write("before: " + num1 + "<br/>");

    let num2: number = getNum();
    document.write("before: " + num2 + "<br/>");

    mulNum(num1, num2);


document.write("after: " + num1 + "<br/>");
document.write("after: " + num2 + "<br/>");

/////////////FUNCTION SECTION//////////////
function getNum(): number {
    alert("the function done!!!!");
    return 3;
}


function mulNum(p1: number, p2: number): void {
    p1 *= 2;
    p2 *= 2;
    num1 *= 2;
    document.write("p1: " + p1 + "<br/>");
    document.write("p2: " + p2 + "<br/>");
}
