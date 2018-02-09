var Chair = (function () {
    function Chair(price, isSold, color) {
        if (price === void 0) { price = 0; }
        if (isSold === void 0) { isSold = false; }
        //(!color) --> will return true when color is undefined
        this.color = (!color) ? this.getRandColor() : color;
        this.isSold = isSold;
        this.price = price;
    }
    Chair.prototype.getRandColor = function () {
        var colorArr = ["Red", "Green", "Blue", "Black", "Yellow"];
        var min = 0;
        var max = colorArr.length - 1;
        var randNum = Math.round((Math.random() * (max - min)) + min);
        var randColor = colorArr[randNum];
        return randColor;
    };
    Chair.prototype.printInfo = function () {
        return "isSold:" + this.isSold + ", color: " + this.color + ", price: " + this.price;
    };
    Object.defineProperty(Chair.prototype, "isSold", {
        get: function () {
            return this._isSold;
        },
        set: function (p) {
            this._isSold = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Chair.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (p) {
            if (p > 20 && p < 400) {
                this._price = p;
            }
            else {
                this._price = Math.round(Math.random() * (400 - 20) + 20);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Chair;
}());
//# sourceMappingURL=chair.js.map