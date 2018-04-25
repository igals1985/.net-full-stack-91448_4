//VALUE TYPE -------------------------------------------------

let num1:number=1;
let num2:number=num1;

document.write(`first step: num1: ${num1} num2: ${num2}<br/>`);  // --> first step: num1: 1 num2: 1


num2=2;

document.write(`second step: num1: ${num1} num2: ${num2}<br/>`);  // --> first step: num1: 1 num2: 2


//REF TYPE -------------------------------------------------

let obj1:any={"num":1};
let obj2:any=obj1;


document.write(`third step: obj1: ${JSON.stringify(obj1)} obj2: ${JSON.stringify(obj2)}<br/>`);  // --> third step: obj1: {"num":1} obj2: {"num":1}


obj2.num=2;


document.write(`fourth step: obj1: ${JSON.stringify(obj1)} obj2: ${JSON.stringify(obj2)}<br/>`);  // --> fourth step: obj1: {"num":2} obj2: {"num":2}
