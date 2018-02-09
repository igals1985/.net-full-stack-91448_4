//קופאי הוא גם בנאדם
//לכן יש כאן הורשה
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Person המחלקה הזו יורשת ממחלקת
var Cashier = (function (_super) {
    __extends(Cashier, _super);
    function Cashier(age, fullName, isMale, address, cinemaName, salary, isNightShiftCashier) {
        _super.call(this, age, fullName, isMale, address, cinemaName, salary);
        this.isNightShiftCashier = isNightShiftCashier;
    }
    //מימוש פונקציה אבסטרקטית
    Cashier.prototype.helloFromPerson2 = function () {
        return " Hello I am a cashier";
    };
    Cashier.prototype.printInfo = function () {
        return this.fullName + " is " + this.age + " yers old, and works in " + this.cinemaName;
    };
    Cashier.prototype.getInfo = function () {
        //super - is a keyword that refers to the base class (in this case "super" is Person)
        var str = _super.prototype.getInfo.call(this) + (", cinemaName: " + this.cinemaName);
        return str;
    };
    return Cashier;
}(CinemaTeamPartner));
//# sourceMappingURL=cashier.js.map