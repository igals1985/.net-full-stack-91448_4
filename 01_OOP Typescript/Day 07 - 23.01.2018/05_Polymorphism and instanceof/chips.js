var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Chips = (function (_super) {
    __extends(Chips, _super);
    function Chips(price, isVeg, calories, foodName, isFried, shape) {
        //'super' must be called before accessing 'this' in the constructor of a derived class.
        //---------------------------------------
        //this.isFried = true;  --> compilation error
        //---------------------------------------
        if (price === void 0) { price = 10; }
        if (isVeg === void 0) { isVeg = true; }
        if (calories === void 0) { calories = 120; }
        if (foodName === void 0) { foodName = "chips"; }
        if (isFried === void 0) { isFried = true; }
        if (shape === void 0) { shape = "Stick"; }
        //בכל יצירה של אובייקטו נגזרת חובה לפנות לבנאי הבסיס - רק אם יצרנו בנאי
        _super.call(this, price, isVeg, calories, foodName); //פניה לבנאי של הבסיס
        /*
        הערה חשובה:
        אין לפנות לאובייקט על ידי
        this
        כל עוד לא פנינו לבנאי הבסיס
        */
        this.isFried = isFried;
        this.shape = shape;
    }
    Chips.prototype.buyInfo = function () {
        //super.buyInfo();
        document.write("isFried: " + this.isFried + ", shape: " + this.shape + "<br/>");
    };
    Object.defineProperty(Chips.prototype, "isFried", {
        get: function () {
            return this._isFried;
        },
        set: function (prop) {
            this._isFried = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chips.prototype, "shape", {
        get: function () {
            return this._shape;
        },
        set: function (prop) {
            this._shape = (this.isValidShape(prop)) ? prop : "Stick";
        },
        enumerable: true,
        configurable: true
    });
    Chips.prototype.isValidShape = function (x) {
        return (x == "Round" || x == "Stick");
    };
    return Chips;
}(Food));
//# sourceMappingURL=chips.js.map