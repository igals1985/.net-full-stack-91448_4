var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pizza = (function (_super) {
    __extends(Pizza, _super);
    function Pizza(price, isVeg, calories, foodName, numOfToppings) {
        if (price === void 0) { price = 10; }
        if (isVeg === void 0) { isVeg = true; }
        if (calories === void 0) { calories = 120; }
        if (foodName === void 0) { foodName = "pizza"; }
        if (numOfToppings === void 0) { numOfToppings = 0; }
        //בכל יצירה של אובייקטו נגזרת חובה לפנות לבנאי הבסיס - רק אם יצרנו בנאי
        _super.call(this, price, isVeg, calories, foodName); //פניה לבנאי של הבסיס
        this.numOfToppings = numOfToppings;
    }
    Pizza.prototype.buyInfo = function () {
        //super.buyInfo();
        document.write("numOfToppings: " + this.numOfToppings + "<br/>");
    };
    Object.defineProperty(Pizza.prototype, "numOfToppings", {
        get: function () {
            return this._numOfToppings;
        },
        set: function (prop) {
            this._numOfToppings = prop >= 0 ? prop : 0;
        },
        enumerable: true,
        configurable: true
    });
    return Pizza;
}(Food));
//# sourceMappingURL=pizza.js.map