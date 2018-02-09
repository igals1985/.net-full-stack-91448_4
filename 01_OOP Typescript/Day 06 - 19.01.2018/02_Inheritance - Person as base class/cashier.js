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
    function Cashier() {
        _super.apply(this, arguments);
    }
    Cashier.prototype.printInfo = function () {
        return this.fullName + " is " + this.age + " yers old, and works in " + this.cinemaName;
    };
    Object.defineProperty(Cashier.prototype, "cinemaName", {
        get: function () {
            return this._cinemaName;
        },
        //set - will change the value of the private member
        //will allways return void, and will get a single parameter with the member type
        set: function (cinemaName) {
            if (cinemaName == "YesPlanet" || cinemaName == "CinemaCity" || cinemaName == "JB-Cinema") {
                this._cinemaName = cinemaName;
            }
        },
        enumerable: true,
        configurable: true
    });
    Cashier.prototype.getInfo = function () {
        //super - is a keyword that refers to the base class (in this case "super" is Person)
        var str = _super.prototype.getInfo.call(this) + (", cinemaName: " + this.cinemaName);
        return str;
    };
    return Cashier;
}(Person));
//# sourceMappingURL=cashier.js.map