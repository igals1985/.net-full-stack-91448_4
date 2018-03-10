////////////////MAIN SECTION////////////

let num1: number = 3;

let num2: number = num1;

 
num2 = 4;

 

 

let arr1: Array<number>;

let arr2: Array<number>;

 

document.write(`before - arr1: ${arr1}<br/>`);

document.write(`before - arr2: ${arr2}<br/>`);

initArr(arr1);

initArr(arr2);

document.write(`after - arr1: ${arr1}<br/>`);

document.write(`after - arr2: ${arr2}<br/>`);

 

 

////////////////FUNCTION SECTION/////////////

function initArr(p1: Array<number>): void {

    p1 = new Array<number>(3);

    p1[0] = 1;

    p1[1] = 2;

    p1[2] = 3;

}

 
