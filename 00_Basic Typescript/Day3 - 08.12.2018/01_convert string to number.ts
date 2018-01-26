let str: string = "9.4";
let num: number;

document.write(`let str: string = "9.4"; => ${str}<br/>`);
document.write(`let num: number; => ${num}<br/><br/>`);

//ERROR-type 'string' is not assignable to type 'number'
//num = str;


//first way to convert a string to number:
num = Number(str);
document.write(`num = Number(str); => ${num}<br/>`);  //output: 9.4

//second way to convert a string to number:
//parseInt - creates a "floor" operation 
num = parseInt(str);
document.write(`num = parseInt(str); => ${num}<br/>`); //output: 9


//third way to convert a string to number:
num = parseFloat(str);
document.write(`num =parseFloat(str); => ${num}<br/>`); //output: 9.4
