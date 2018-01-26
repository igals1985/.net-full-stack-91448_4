class A {

    public numA: number = 0;

    public constructor(){
        document.write("ctor A<br/>");
    }


    public print(): void {
        document.write("print A<br/>");
    }

    public printAll(): void {
        document.write("printAll A<br/>");
    }
}


class B extends A {

    public numB: number = 1;

    public constructor() {
        super();
        document.write("ctor B<br/>");
    }

    public print():void {
        document.write("print B<br/>");
    }

    public printAll(): void {
        super.printAll();
        document.write("printAll B<br/>");
    }
}



class C extends B {

    public numC: number = 2;

    public constructor() {
        super();
        document.write("ctor C<br/>");
    }

    public print(): void {
        document.write("print C<br/>");
    }

    public printAll(): void {
        super.printAll();
        document.write("printAll C<br/>");
    }
}

document.write("---------------- new A---------------------<br/>");
let objA: A = new A();

document.write("---------------- new B---------------------<br/>");
let objB: B = new B();

document.write("---------------- new C---------------------<br/>");
let objC: C = new C();


/*
------------------
OUTPUT:
------------------
---------------- new A---------------------
ctor A
---------------- new B---------------------
ctor A
ctor B
---------------- new C---------------------
ctor A
ctor B
ctor C
*/


document.write("---------------- print A---------------------<br/>");
objA.print();

document.write("---------------- print B---------------------<br/>");
objB.print();

document.write("---------------- print C---------------------<br/>");
objC.print();


/*
------------------
OUTPUT:
------------------
---------------- print A---------------------
print A
---------------- print B---------------------
print B
---------------- print C---------------------
print C
*/



document.write("---------------- printAll A---------------------<br/>");
objA.printAll();

document.write("---------------- printAll B---------------------<br/>");
objB.printAll();

document.write("---------------- printAll C---------------------<br/>");
objC.printAll ();


/*
------------------
OUTPUT:
------------------
---------------- printAll A---------------------
printAll A
---------------- printAll B---------------------
printAll A
printAll B
---------------- printAll C---------------------
printAll A
printAll B
printAll C
*/


let arrayOfA: A[] = [new A(), new B(), new C()];


document.write("---------------- print arrayOfA---------------------<br/>");
for (let i: number = 0; i < arrayOfA.length; i++) {
    arrayOfA[i].print();
}


/*
------------------
OUTPUT:
------------------
---------------- print arrayOfA---------------------
print A
print B
print C
*/


document.write("---------------- num arrayOfA---------------------<br/>");
for (let i: number = 0; i < arrayOfA.length; i++) {

    if (arrayOfA[i] instanceof C) {
        document.write(`numC: ${(arrayOfA[i] as C).numC}<br/>`);
    }


    else if (arrayOfA[i] instanceof B) {
        document.write(`numB: ${(<B>arrayOfA[i]).numB}<br/>`);
    }

    else if (arrayOfA[i] instanceof A) {
        document.write(`numA: ${arrayOfA[i].numA}<br/>`);
    }
    
}


/*

------------------
OUTPUT:
------------------
---------------- num arrayOfA---------------------
numA: 0
numB: 1
numC: 2
*/