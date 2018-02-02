var A = (function () {
    function A() {
    }
    return A;
}());
var B = (function () {
    function B(num, objA) {
        this.num = num;
        this.objA.age = 3; //שגיאת זמן ריצה - עדיין לא מצביע לאובייקט
        this.objA = objA; //השמה של כתובת לאובייקט
        this.objA.age = 3;
    }
    return B;
}());
var C = (function () {
    function C() {
    }
    return C;
}());
var D = (function () {
    function D(num, objA) {
        if (num === void 0) { num = 9; }
        if (objA === void 0) { objA = new A(); }
        this.num = num;
        this.objA.age = 3; //שגיאת זמן ריצה - עדיין לא מצביע לאובייקט
        this.objA = objA; //השמה של כתובת לאובייקט
        this.objA.age = 3;
    }
    return D;
}());
var objA1 = new A();
var objB1 = new B(3, objA1); //אופציה ראשונה לשליחת אובייקט
var objB2 = new B(3, new A()); //אופציה שניה לשליחת אובייקט
var objC1 = new C();
objC1.objA = new A(); //אופציה ראשונה להשמת אובייקט
var objC2 = new C();
objC2.objA = objA1; //אופציה שניה להשמת אובייקט
/*
הערה חשובה:
----------------
כאשר יש פרמטרים דיפולטיביים, ולא נרצה לדרוס אותם
נוכל לשלוח כפרמטר את הערך
undefined
שמשמש רק כשומר מקום - ולא ידרוס את הערך הדיפולטיבי
 */
var objD1 = new D(undefined, objA1); //num=9, objA=objA1
var objD2 = new D(3, objA1); //num=3, objA=objA1
var objD3 = new D(3); //num=3, objA=new A()
var objD4 = new D(); //num=9, objA=new A()
var objD5 = new D(undefined, undefined); //num=9, objA=new A()
var objD6 = new D(undefined); //num=9, objA=new A()
//# sourceMappingURL=app.js.map