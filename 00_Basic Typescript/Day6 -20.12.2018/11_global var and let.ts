let num: number = 4;
document.write(`num = ${mulNum1(num)}<br/>`);
document.write(`num = ${mulNum2()}<br/>`);
let num1: number = 0;
document.write(`num1 before loop = ${num1}<br/>`);
for (let i: number = 0; i < 10; i++) {
    incNum();
}
document.write(`num1 after loop = ${num1}<br/>`);


function mulNum1(p1: number): number {
    return p1 * 2;
}

function mulNum2(): number {
    {
        let z1: number = 0;
    }
    var z2: number = 0;
    return 3 * 2;
}


function incNum(): void {
    num1++;
}