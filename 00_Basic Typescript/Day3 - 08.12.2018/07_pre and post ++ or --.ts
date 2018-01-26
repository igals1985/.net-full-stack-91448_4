let num1: number = 3;
let num2: number = 8;

++num1;
document.write(`num1 ++;  => num1=${num1} num2=${num2}<br/>`);

num2--;
document.write(`num2 --;  => num1=${num1} num2=${num2}<br/>`);



let num3: number = 1;
let num4: number = 2;
document.write(`****************num3***********<br/>`);
//post - after the var
document.write(`num3 -- =${num3--}<br/>`);  //num3 -- =1
document.write(`num3=${num3}<br/>`);  //num3 =0


document.write(`****************numTemp3***********<br/>`);
let numTemp3: number = 1;
//post - after the var
document.write(`numTemp3 -- =${numTemp3}<br/>`);
numTemp3 = numTemp3 - 1;

document.write(`numTemp3=${numTemp3}<br/>`);

document.write(`****************num4***********<br/>`);
//pre - before the var
document.write(`-- num4  =${--num4}<br/>`);
document.write(`num4=${num4}<br/>`);

document.write(`****************numTemp4***********<br/>`);
let numTemp4: number = 2;
//pre - before the var
numTemp4 = numTemp4 - 1;
document.write(`-- numTemp4  =${numTemp4}<br/>`);

document.write(`numTemp4=${numTemp4}<br/>`);




