//מנהל הוא גם בנאדם
//לכן יש כאן הורשה
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Person המחלקה הזו יורשת ממחלקת
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(age, fullName, isMale, address, cinemaName, salary, isCinemaOwner) {
        _super.call(this, age, fullName, isMale, address, cinemaName, salary);
        this.isCinemaOwner = isCinemaOwner;
    }
    Manager.prototype.getInfo = function () {
        var str = _super.prototype.getInfo.call(this) + (", salary: " + this.salary);
        return str;
    };
    //מימוש פונקציה אבסטרקטית
    Manager.prototype.helloFromPerson2 = function () {
        return " Hello I am a manager";
    };
    return Manager;
}(CinemaTeamPartner));
//# sourceMappingURL=manager.js.map