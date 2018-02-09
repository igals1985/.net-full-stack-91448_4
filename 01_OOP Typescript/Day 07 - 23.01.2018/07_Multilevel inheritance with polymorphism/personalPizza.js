var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PersonalPizza = (function (_super) {
    __extends(PersonalPizza, _super);
    function PersonalPizza() {
        _super.apply(this, arguments);
        //במחלקה הזו אין מימוש של בנאי
        //ולכן נוצר בנאי דיפולטיבי שמבצע פניה לבנאי הבסיס
        this._size = "Small";
    }
    Object.defineProperty(PersonalPizza.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (prop) {
            if (prop == "Small" || prop == "Large") {
                this._size = prop;
            }
            else {
                this._size = "Small";
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonalPizza;
}(Pizza));
//# sourceMappingURL=personalPizza.js.map