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
    function Manager() {
        _super.apply(this, arguments);
    }
    //"fullName" and "age" are public mrmbers in Person (BASE CLASS)
    //"salary" is a local member (in Manager class)
    Manager.prototype.getInfo = function () {
        var str = _super.prototype.getInfo.call(this) + (", salary: " + this.salary);
        return str;
    };
    Object.defineProperty(Manager.prototype, "salary", {
        //actions
        get: function () {
            return this._salary;
        },
        set: function (x) {
            if (x >= 20000) {
                this._salary = x;
            }
            else {
                this._salary = 20000;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Manager;
}(Person));
//# sourceMappingURL=manager.js.map