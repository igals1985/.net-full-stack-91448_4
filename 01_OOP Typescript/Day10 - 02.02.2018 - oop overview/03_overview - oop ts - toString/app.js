var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
        this.age = 9;
    }
    return A;
}());
var B = (function () {
    function B() {
        this.age = 9;
    }
    B.prototype.toString = function () {
        return "<br/>age: " + this.age;
    };
    return B;
}());
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
        this.name = "Victoria";
    }
    return C;
}(B));
var objA = new A();
document.write('<br/>--------------------A-----------------------<br/>');
document.write(objA.toString()); //toString
document.write(objA + ''); // toString קריאה מרומזת ל
document.write("" + objA); // toString קריאה מרומזת ל
document.write(objA + ""); // toString קריאה מרומזת ל
var objB = new B();
document.write('<br/>--------------------B-----------------------<br/>');
document.write(objB.toString()); //toString
document.write(objB + ''); // toString קריאה מרומזת ל
document.write("" + objB); // toString קריאה מרומזת ל
document.write(objB + ""); // toString קריאה מרומזת ל
var objC = new C();
document.write('<br/>--------------------C-----------------------<br/>');
document.write(objC.toString()); //toString
document.write(objC + ''); // toString קריאה מרומזת ל
document.write("" + objC); // toString קריאה מרומזת ל
document.write(objC + ""); // toString קריאה מרומזת ל
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
//# sourceMappingURL=app.js.map