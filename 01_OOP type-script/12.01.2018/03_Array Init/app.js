//a way to add elements with new Array() ctor
var numArr = new Array(subNum(3, 4), subNum(9, 2), subNum(5, 1));
document.write("numArr: " + numArr); //--> numArr: -1,7,4
function subNum(x, y) {
    return x - y;
}
//# sourceMappingURL=app.js.map