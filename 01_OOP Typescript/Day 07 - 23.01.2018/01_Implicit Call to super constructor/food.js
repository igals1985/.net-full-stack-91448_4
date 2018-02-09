var Food = (function () {
    function Food() {
        document.write("Food constructor");
    }
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