//מחלקת בסייס לכל המאכלים - מחלקה מופשטת
//מחלקה מופשטת - מחלקה אבסטרקטית
//************** abstract - a keyword to create an abstract class
var Food = (function () {
    function Food(price, isVeg, calories, foodName) {
        if (price === void 0) { price = 10; }
        if (isVeg === void 0) { isVeg = false; }
        console.log("Food constructor");
        this.price = price;
        this.isVeg = isVeg;
        this.calories = calories;
        this.foodName = foodName;
    }
    Food.prototype.buyInfo = function () {
        document.write(this.foodName + " info - price: " + this.price + ", isVeg: " + this.isVeg + ", calories: " + this.calories + "<br/>");
    };
    Object.defineProperty(Food.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (prop) {
            this._price = (prop > 0) ? prop : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "isVeg", {
        get: function () {
            return this._isVeg;
        },
        set: function (prop) {
            this._isVeg = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "calories", {
        get: function () {
            return this._calories;
        },
        set: function (prop) {
            this._calories = (prop > 0) ? prop : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Food.prototype, "foodName", {
        get: function () {
            return this._foodName;
        },
        set: function (prop) {
            this._foodName = prop;
        },
        enumerable: true,
        configurable: true
    });
    return Food;
}());
//# sourceMappingURL=food.js.map