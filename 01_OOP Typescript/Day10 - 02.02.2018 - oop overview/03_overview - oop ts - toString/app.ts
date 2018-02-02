

class A {
    public age: number = 9;
}


class B {
    public age: number = 9;


    public toString(): string {
        return `<br/>age: ${this.age}`
    }
}

class C extends B {
    public name: string = "Victoria";
}

let objA: A = new A();


document.write('<br/>--------------------A-----------------------<br/>');
document.write(objA.toString());  //toString
document.write(objA + '');   // toString קריאה מרומזת ל
document.write(`${objA}`);   // toString קריאה מרומזת ל
document.write(objA + "");   // toString קריאה מרומזת ל




let objB: B = new B();
document.write('<br/>--------------------B-----------------------<br/>');
document.write(objB.toString());  //toString
document.write(objB + '');   // toString קריאה מרומזת ל
document.write(`${objB}`);   // toString קריאה מרומזת ל
document.write(objB + "");   // toString קריאה מרומזת ל


let objC: C = new C();
document.write('<br/>--------------------C-----------------------<br/>');
document.write(objC.toString());  //toString
document.write(objC + '');   // toString קריאה מרומזת ל
document.write(`${objC}`);   // toString קריאה מרומזת ל
document.write(objC + "");   // toString קריאה מרומזת ל


/*


פלט:

***********************************


--------------------A-----------------------
[object Object][object Object][object Object][object Object]
--------------------B-----------------------

age: 9
age: 9
age: 9
age: 9
--------------------C-----------------------

age: 9
age: 9
age: 9
age: 9
*/