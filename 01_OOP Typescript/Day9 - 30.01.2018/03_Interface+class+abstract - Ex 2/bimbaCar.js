var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
Non- abstract class 'Bimba' must implement inherited abstract member from class 'BasicCar' that extends 'Vehichle':
    1) 'moveLeftAction'
    2)'moveRightAction'
*/
var Bimba = (function (_super) {
    __extends(Bimba, _super);
    function Bimba() {
        _super.apply(this, arguments);
    }
    //מימוש מלא של פונקציה שקיבלנו מהממשק 
    Bimba.prototype.moveLeftAction = function (speed) {
        document.write(this.vehichleName + " moves left in speed: " + speed + "<br/>");
    };
    //מימוש מלא של פונקציה שקיבלנו מהממשק 
    Bimba.prototype.moveRightAction = function (speed) {
        document.write(this.vehichleName + " moves right in speed: " + speed + "<br/>");
    };
    return Bimba;
}(BasicCar));
//# sourceMappingURL=bimbaCar.js.map