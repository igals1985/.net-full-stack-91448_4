////////////////MAIN SECTION////////////

 

 

let num1: number = 3;

let num2: number = 2;

 

document.write(`<br/>----------------------before <br/>`);

document.write(`before - num1: ${num1}<br/>`);

document.write(`before - num2: ${num2}<br/>`);

num1=initNum(num1);

initNum(num2);

 

document.write(`<br/>----------------------after <br/>`);

document.write(`after - num1: ${num1}<br/>`);

document.write(`after - num2: ${num2}<br/>`);

 

 

 

let arr1: Array<number> = new Array<number>(0,0,0);

let arr2: Array<number> = [2,2,2];

 

 

document.write(`<br/>----------------------before <br/>`);

document.write(`before - arr1: ${arr1}<br/>`);

document.write(`before - arr2: ${arr2}<br/>`);

initArr(arr1);

initArr(arr2);

 

document.write(`<br/>----------------------after <br/>`);

document.write(`after - arr1: ${arr1}<br/>`);

document.write(`after - arr2: ${arr2}<br/>`);

 

 

////////////////FUNCTION SECTION/////////////

 

function initNum(p1: number): number {

    p1 = 4;

    return p1;

  

}

function initArr(p1: Array<number>): void {

 

    document.write(`<br/>----------------------in function <br/>`);

    document.write(`before change - p1: ${p1}<br/>`);

    p1[0] = 1;

    p1[1] = 2;

    p1[2] = 3;

    document.write(`after change- p1: ${p1}<br/>`);
    }