//interface נגדיר ממשק בעזרת המילה השמורה 
//I-השם של ממשק תמיד מתחיל ב
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
        //מימוש משתנה של הממשק
        this.didStartAction = true;
    }
    //מימוש של הפונקציה המוגדרת בממשק
    A.prototype.startAction = function (str) {
        document.write(str + "<br/>");
        return true;
    };
    return A;
}());
//A המחלקה הזו אוטומטית תכיל כל מה שיש במחלקה 
//IActionStart ולכן יוצא שהיא גם ממשמת את 
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
        //מימוש משתנה של הממשק
        this.didStopAction = true;
    }
    //מימוש של הפונקציה המוגדרת בממשק
    B.prototype.stopAction = function (str) {
        document.write(str + "<br/>");
        return true;
    };
    return B;
}(A));
var objA = new A();
//-------------------------------------------------------------
//instanceof is for class not for interface!!!
//Cannot find name 'IActionStart'
//if (objA instanceof IActionStart) {}   ---> compilation error!!!!
//-------------------------------------------------------------
//-------------------------casting to interface (first way)------------------------------------
objA.didStartAction;
objA.startAction("Test");
//---------------------------------------------------------------------------------------------
//-------------------------casting to interface (second way)------------------------------------
objA.didStartAction;
objA.startAction("Test");
//---------------------------------------------------------------------------------------------- 
//# sourceMappingURL=app.js.map