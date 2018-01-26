var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Chips = (function (_super) {
    __extends(Chips, _super);
    function Chips(price, isVeg, calories, foodName, isFried, shape) {
        if (price === void 0) { price = 10; }
        if (isVeg === void 0) { isVeg = true; }
        if (calories === void 0) { calories = 120; }
        if (foodName === void 0) { foodName = "chips"; }
        if (isFried === void 0) { isFried = true; }
        if (shape === void 0) { shape = "Stick"; }
        //בכל יצירה של אובייקטו נגזרת חובה לפנות לבנאי הבסיס - רק אם יצרנו בנאי
        _super.call(this, price, isVeg, calories, foodName); //פניה לבנאי של הבסיס
        //מימוש משתנה אבסרקטי
        //the implementation is via a setter and a getter
        this._isKosher = false;
        this.isFried = isFried;
        this.shape = shape;
    }
    //מימוש לפונקציה האבסרקטית
    Chips.prototype.cookFood = function (minutes) {
        if (this.isFried) {
            document.write("Fry the Chips " + minutes + " minutes<br/>");
        }
        else {
            document.write("Bake the Chips " + minutes + " minutes<br/>");
        }
        return true;
    };
    Object.defineProperty(Chips.prototype, "isKosher", {
        get: function () {
            return this._isKosher;
        },
        set: function (b) {
            this._isKosher = b;
        },
        enumerable: true,
        configurable: true
    });
    Chips.prototype.buyInfo = function () {
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