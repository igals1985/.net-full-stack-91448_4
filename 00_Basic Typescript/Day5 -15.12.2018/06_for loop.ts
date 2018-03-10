 



//////////////WHILE SECTION///////////
document.write(`<br/>WHILE<br/>`);

let whileIndex: number = 1,
    firstName: string = "Sean";

while (whileIndex <=10) {
    document.write(`whileIndex: ${whileIndex}<br/>`);
    whileIndex++;
}

//////////////FOR SECTION///////////
document.write(`<br/>FOR<br/>`);
for (let forIndex: number = 1; forIndex <= 10; forIndex++) {
    document.write(`forIndex: ${forIndex}<br/>`);
}



//////////////FOR SECTION///////////
document.write(`<br/>FOR WITH EMPTY PARTS<br/>`);
let forIndex1: number=1;

for (; forIndex1 <= 10;) {
    document.write(`forIndex1: ${forIndex1}<br/>`);
    forIndex1++;
}



//////////////FOR SECTION///////////
document.write(`<br/>FOR WITH FEW PARTS<br/>`);

for (let num1: number = 2, num2: number = 8, iterator: number = 1; num1 <= num2; num1++,iterator++) {
    document.write(`num1: ${num1}<br/>`);
    document.write(`iterator: ${iterator}<br/><br/>`);
}


//////////////FOR SECTION///////////
document.write(`<br/>EMPTY FOR<br/>`);
for (let forIndex2: number = 1; forIndex2 <= 10; document.write(`forIndex2: ${forIndex2++}<br/>`));


///////////////LOOP WITHOUT BLOCK////////////////
document.write(`<br/>WHILE LOOP WITHOUT BLOCK<br/>`);

let whileIndex3: number = 1;

while (whileIndex3 <= 10) 
    document.write(`whileIndex3: ${whileIndex3++}<br/>`);

document.write(`after while loop<br/>`);

document.write(`<br/>FOR LOOP WITHOUT BLOCK<br/>`);
for (let forIndex4: number = 1; forIndex4 <= 10; forIndex4++)
    document.write(`forIndex4: ${forIndex4}<br/>`);

document.write(`after for loop<br/>`);

