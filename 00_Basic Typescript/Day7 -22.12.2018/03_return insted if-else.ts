let num1: number = -4;
let num2: number = 4;


document.write(`calling func with num1 ${num1}<br/>`);
func(num1);

document.write(`<br/>calling func with num2 ${num2}<br/>`);
func(num2);

function func(num: number): void {
    if (num >= 0) {
        document.write(`num**2: ${num ** 2}, Math.pow(num,2):${Math.pow(num, 2)}<br/>`);
        return;
    }

    document.write(`num*2: ${num * 2}<br/>`)
        
}
