class A {
    public only_in_A(): string {
        return "A in only_in_A";
    }

    public only_in_A_B(): string {
        return "A in only_in_A_B";
    }

    public only_in_A_B_C(): string {
        return "A in only_in_A_B_C";
    }
}

class B extends A {

    public only_in_A_B(): string {

        //super - is a keyword that refers to the base class (in this case "super" is A)
        let str: string = super.only_in_A_B();  //str= "A in only_in_A_B"
        return str + "  & B in only_in_A_B";
    }

    public only_in_A_B_C(): string {

        //super - is a keyword that refers to the base class (in this case "super" is A)
        let str: string = super.only_in_A_B();  //str= "A in only_in_A_B_C"
        return str +" & B in only_in_A_B_C";
    }
}



class C extends B {
    public only_in_A_B_C(): string {

        //super - is a keyword that refers to the base class (in this case "super" is B)
        let str: string = super.only_in_A_B_C();  //str= "A in only_in_A_B_C & B in only_in_A_B_C"
        return str + " & C in only_in_A_B_C";
    }
}

let objA: A = new A();
let objB: B = new B();
let objC: C = new C();


document.write(`objA.only_in_A(): ${objA.only_in_A()}<br/>`);  //"A in only_in_A"
document.write(`objB.only_in_A(): ${objB.only_in_A()}<br/>`);  //"A in only_in_A"
document.write(`objC.only_in_A(): ${objC.only_in_A()}<br/><br/>`);  //"A in only_in_A"

document.write(`objA.only_in_A_B(): ${objA.only_in_A_B()}<br/>`);  //"A in only_in_A_B"
document.write(`objB.only_in_A_B(): ${objB.only_in_A_B()}<br/>`);  //"A in only_in_A_B & B in only_in_A_B"
document.write(`objC.only_in_A_B(): ${objC.only_in_A_B()}<br/><br/>`);  //"A in only_in_A_B & B in only_in_A_B"

document.write(`objA.only_in_A_B_C(): ${objA.only_in_A_B_C()}<br/>`);  //"A in only_in_A_B_C"
document.write(`objB.only_in_A_B_C(): ${objB.only_in_A_B_C()}<br/>`);  //"A in only_in_A_B & B in only_in_A_B_C"
document.write(`objC.only_in_A_B_C(): ${objC.only_in_A_B_C()}<br/><br/>`);  //"A in only_in_A_B & B in only_in_A_B_C & C in only_in_A_B_C"