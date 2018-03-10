let num1: number = 6;

document.write(`before setNum: ${num1}<br/>`);
setNum(num1);
document.write(`after setNum: ${num1}<br/><br/>`);

/*
all the following arrays are the same:
 */

//first way
let arr1: number[] = [1, 2, 3];

document.write(`before setArray: ${arr1}<br/>`);
setArray(arr1);
document.write(`after setArray: ${arr1 }<br/>`);

//second way - send 1 number as the legth of the array
let arr2: Array<number> = new Array<number>(3);
arr2[0] = 1;
arr2[1] = 2;
arr2[2] = 3;


//third way - send values that will create an array
let arr3: Array<number> = new Array<number>(1, 2, 3);


function setNum(p1: number): void {
    p1 = 9;
}



function setArray(p1: Array<number>): void {
    p1[0] = 9;
}

