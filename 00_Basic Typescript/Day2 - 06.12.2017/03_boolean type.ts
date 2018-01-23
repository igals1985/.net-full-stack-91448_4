let boolProp1: boolean;
let boolProp2: boolean;


boolProp1 = true;
boolProp2 = !boolProp1;   //boolProp2=!true  =>  boolProp2=false



document.write("boolProp1 =" + boolProp1 + "<br/>"); // output: true
document.write("boolProp2 =" + boolProp2 + "<br/>"); // output: false
document.write("boolProp1 || boolProp2 =" + (boolProp1 || boolProp2) + "<br/>"); // output: true   => true || false
document.write("boolProp1 && boolProp2 =" + (boolProp1 && boolProp2) + "<br/>"); // output: false  => true && false