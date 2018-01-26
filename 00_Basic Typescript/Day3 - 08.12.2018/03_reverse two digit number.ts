//input into num1 - two digit number
let num1: number = Number(prompt("enter a two digit number:"));


//first way 
let num2: number = parseInt(`${num1 % 10}${num1 / 10}`);

document.write(`original number - num1:  ${num1}<br/>`);
document.write(`result number - num2:  ${num2}<br/><br/>`);




//second way 
let tempStr: string = `${num1 / 10}`;
let num3: number = Number(`${num1 % 10}${parseInt(tempStr)}`);

document.write(`original number - num1:  ${num1}<br/>`);
document.write(`result number - num3:  ${num3}<br/><br/>`);



//third way 
let num4: number = (num1 % 10) * 10 + Math.floor(num1 / 10);

document.write(`original number - num1:  ${num1}<br/>`);
document.write(`result number - num4:  ${num4}<br/><br/>`);


