const MAX: number = -2;
let num1: number = 0;
let num2: number = 0;

document.write(`<br/>do - while<br/>`);
do {
    num1++;
    document.write(`num1: ${num1}<br/>`);
} while (num1<MAX);

document.write(`<br/>while<br/>`);

while (num2 < MAX) {
    num2++;
    document.write(`num2: ${num2}<br/>`);
} 
