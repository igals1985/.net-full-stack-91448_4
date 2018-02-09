class A {
    public age: number = 19;
}


class B {
    public age: number = 19;

    public toString(): string {
        return `age: ${this.age}`;
    }
}


let num: number = 2;
document.write("---------------number-------------<br/>");
document.write(num + "<br/>");
document.write(`${num}<br/>`);
document.write(num.toString() + "<br/>");


let bool: boolean = true;
document.write("---------------boolean-------------<br/>");
document.write(bool +"<br/>");
document.write(`${bool}<br/>`);
document.write(bool.toString() + "<br/>");


let str: string = "Weekend";
document.write("---------------string-------------<br/>");
document.write(str + "<br/>");
document.write(`${str}<br/>`);
document.write(str.toString() + "<br/>");

let arr: number[] = [1, 2, 3];
document.write("---------------number[]-------------<br/>");
document.write(arr + "<br/>");
document.write(`${arr}<br/>`);
document.write(arr.toString() + "<br/>");

let objA: A = new A();
document.write("---------------A-------------<br/>");
document.write(objA + "<br/>");
document.write(`${objA}<br/>`);
document.write(objA.toString() + "<br/>");


let objB: B = new B();
document.write("---------------B-------------<br/>");
document.write(objB + "<br/>");
document.write(`${objB}<br/>`);
document.write(objB.toString() + "<br/>");



/*

OUTPUT:
=================================
---------------number-------------
2
2
2
---------------boolean-------------
true
true
true
---------------string-------------
Weekend
Weekend
Weekend
---------------number[]-------------
1,2,3
1,2,3
1,2,3
---------------A-------------
[object Object]
[object Object]
[object Object]
---------------B-------------
age: 19
age: 19
age: 19
*/