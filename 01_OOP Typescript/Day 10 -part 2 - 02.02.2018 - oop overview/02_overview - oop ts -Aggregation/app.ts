class A {
    public age: number;   

}


class B{
    public num: number;   
    public objA: A; //הכלה  

    public constructor(num: number, objA: A) {
        this.num = num;

        this.objA.age = 3;  //שגיאת זמן ריצה - עדיין לא מצביע לאובייקט


        this.objA = objA;  //השמה של כתובת לאובייקט
        this.objA.age = 3;
    }
}


class C {
    public num: number;
    public objA: A; //הכלה  

    
}

class D {
    public num: number;
    public objA: A; //הכלה  

    public constructor(num: number=9, objA: A=new A()) {
        this.num = num;

        this.objA.age = 3;  //שגיאת זמן ריצה - עדיין לא מצביע לאובייקט


        this.objA = objA;  //השמה של כתובת לאובייקט
        this.objA.age = 3;
    }
}
let objA1 = new A();
let objB1: B = new B(3, objA1);  //אופציה ראשונה לשליחת אובייקט

let objB2: B = new B(3, new A());  //אופציה שניה לשליחת אובייקט


let objC1: C = new C();
objC1.objA = new A(); //אופציה ראשונה להשמת אובייקט


let objC2: C = new C();
objC2.objA = objA1;  //אופציה שניה להשמת אובייקט


/*
הערה חשובה:
----------------
כאשר יש פרמטרים דיפולטיביים, ולא נרצה לדרוס אותם
נוכל לשלוח כפרמטר את הערך
undefined
שמשמש רק כשומר מקום - ולא ידרוס את הערך הדיפולטיבי
 */
let objD1: D = new D(undefined, objA1);  //num=9, objA=objA1

let objD2: D = new D(3, objA1);  //num=3, objA=objA1

let objD3: D = new D(3);  //num=3, objA=new A()

let objD4: D = new D();  //num=9, objA=new A()

let objD5: D = new D(undefined, undefined);  //num=9, objA=new A()
  
let objD6: D = new D(undefined);  //num=9, objA=new A()




