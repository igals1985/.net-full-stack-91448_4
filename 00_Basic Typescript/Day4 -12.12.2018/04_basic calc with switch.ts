let num1: number = Number(prompt("enter first munber:"));

let operation: string = prompt("enter operation:");

let num2: number = Number(prompt("enter second munber:"));


switch (operation) {
    case "+": alert(num1 + num2); break;
    case "*": alert(num1 * num2); break;
    case "-": alert(num1 - num2); break;
    case "/": alert(num1 / num2); break;
    case "%": alert(num1 % num2); break;
    default: alert("non valid operation");
}