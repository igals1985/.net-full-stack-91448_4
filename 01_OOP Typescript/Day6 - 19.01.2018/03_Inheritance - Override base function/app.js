var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
    }
    A.prototype.only_in_A = function () {
        return "A in only_in_A";
    };
    A.prototype.only_in_A_B = function () {
        return "A in only_in_A_B";
    };
    A.prototype.only_in_A_B_C = function () {
        return "A in only_in_A_B_C";
    };
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    B.prototype.only_in_A_B = function () {
        return "B in only_in_A_B";
    };
    B.prototype.only_in_A_B_C = function () {
        return "B in only_in_A_B_C";
    };
    return B;
}(A));
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    C.prototype.only_in_A_B_C = function () {
        return "C in only_in_A_B_C";
    };
    return C;
}(B));
var objA = new A();
var objB = new B();
var objC = new C();
document.write("objA.only_in_A(): " + objA.only_in_A() + "<br/>"); //"A in only_in_A"
document.write("objB.only_in_A(): " + objB.only_in_A() + "<br/>"); //"A in only_in_A"
document.write("objC.only_in_A(): " + objC.only_in_A() + "<br/><br/>"); //"A in only_in_A"
document.write("objA.only_in_A_B(): " + objA.only_in_A_B() + "<br/>"); //"A in only_in_A_B"
document.write("objB.only_in_A_B(): " + objB.only_in_A_B() + "<br/>"); //"B in only_in_A_B"
document.write("objC.only_in_A_B(): " + objC.only_in_A_B() + "<br/><br/>"); //"B in only_in_A_B"
document.write("objA.only_in_A_B_C(): " + objA.only_in_A_B_C() + "<br/>"); //"A in only_in_A_B_C"
document.write("objB.only_in_A_B_C(): " + objB.only_in_A_B_C() + "<br/>"); //"B in only_in_A_B_C"
document.write("objC.only_in_A_B_C(): " + objC.only_in_A_B_C() + "<br/><br/>"); //"C in only_in_A_B_C"
//# sourceMappingURL=app.js.map