var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
        this.numA = 0;
        document.write("ctor A<br/>");
    }
    A.prototype.print = function () {
        document.write("print A<br/>");
    };
    A.prototype.printAll = function () {
        document.write("printAll A<br/>");
    };
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.call(this);
        this.numB = 1;
        document.write("ctor B<br/>");
    }
    B.prototype.print = function () {
        document.write("print B<br/>");
    };
    B.prototype.printAll = function () {
        _super.prototype.printAll.call(this);
        document.write("printAll B<br/>");
    };
    return B;
}(A));
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.call(this);
        this.numC = 2;
        document.write("ctor C<br/>");
    }
    C.prototype.print = function () {
        document.write("print C<br/>");
    };
    C.prototype.printAll = function () {
        _super.prototype.printAll.call(this);
        document.write("printAll C<br/>");
    };
    return C;
}(B));
document.write("---------------- new A---------------------<br/>");
var objA = new A();
document.write("---------------- new B---------------------<br/>");
var objB = new B();
document.write("---------------- new C---------------------<br/>");
var objC = new C();
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
objC.printAll();
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
var arrayOfA = [new A(), new B(), new C()];
document.write("---------------- print arrayOfA---------------------<br/>");
for (var i = 0; i < arrayOfA.length; i++) {
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
for (var i = 0; i < arrayOfA.length; i++) {
    if (arrayOfA[i] instanceof C) {
        document.write("numC: " + arrayOfA[i].numC + "<br/>");
    }
    else if (arrayOfA[i] instanceof B) {
        document.write("numB: " + arrayOfA[i].numB + "<br/>");
    }
    else if (arrayOfA[i] instanceof A) {
        document.write("numA: " + arrayOfA[i].numA + "<br/>");
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
//# sourceMappingURL=app.js.map