var A = (function () {
    function A() {
        this.age = 19;
    }
    return A;
}());
var B = (function () {
    function B() {
        this.age = 19;
    }
    B.prototype.toString = function () {
        return "age: " + this.age;
    };
    return B;
}());
var num = 2;
document.write("---------------number-------------<br/>");
document.write(num + "<br/>");
document.write(num + "<br/>");
document.write(num.toString() + "<br/>");
var bool = true;
document.write("---------------boolean-------------<br/>");
document.write(bool + "<br/>");
document.write(bool + "<br/>");
document.write(bool.toString() + "<br/>");
var str = "Weekend";
document.write("---------------string-------------<br/>");
document.write(str + "<br/>");
document.write(str + "<br/>");
document.write(str.toString() + "<br/>");
var arr = [1, 2, 3];
document.write("---------------number[]-------------<br/>");
document.write(arr + "<br/>");
document.write(arr + "<br/>");
document.write(arr.toString() + "<br/>");
var objA = new A();
document.write("---------------A-------------<br/>");
document.write(objA + "<br/>");
document.write(objA + "<br/>");
document.write(objA.toString() + "<br/>");
var objB = new B();
document.write("---------------B-------------<br/>");
document.write(objB + "<br/>");
document.write(objB + "<br/>");
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
//# sourceMappingURL=app.js.map