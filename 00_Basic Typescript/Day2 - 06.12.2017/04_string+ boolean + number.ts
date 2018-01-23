let numProp: number = 3;
let numProp1: number = 4;

let boolProp1: boolean = (numProp == numProp1);
let boolProp2: boolean = (numProp < numProp1);

let strProp1: string = "numProp=" + numProp + " numProp1=" + numProp1 + " boolProp1=" + boolProp1 + " boolProp2=" + boolProp2 + "<br/>";
let strProp2: string = `numProp=${numProp} numProp1=${numProp1} boolProp1=${boolProp1} boolProp2=${boolProp2}<br/>`;


document.write(strProp1);
document.write(strProp2);
