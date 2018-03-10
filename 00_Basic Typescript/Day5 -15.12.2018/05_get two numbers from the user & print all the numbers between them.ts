let num1: number =Number(prompt("enter the first num"));
let num2: number = Number(prompt("enter the second num"));
let temp: number;

if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}

do {
    document.write(`num1: ${num1}<br/>`);
    num1++;
} while (num1<=num2);