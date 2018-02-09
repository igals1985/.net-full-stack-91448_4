var Cat = (function () {
    function Cat() {
    }
    return Cat;
}());
// 1. Compilation Error:
var a = 10;
document.write(a);
// 2. Runtime Error:
var b; // ReferenceError Exception -Cannot read property 'toString' of undefined
document.write(b.toString() + "<br/>");
// 3. Logic Error:
var c = 10;
var d = 20;
var sum = c * d;
document.write(c + " + " + d + " = " + sum);
//# sourceMappingURL=app.js.map