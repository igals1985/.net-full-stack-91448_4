var FinanceManager = (function () {
    function FinanceManager() {
    }
    Object.defineProperty(FinanceManager.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            // ראשית, נבדוק אם המידע שגוי
            if (price < 0) {
                throw new IllegalPriceError(); // זריקת חריגה שאנו בנינו
            }
            // אם הכל בסדר, נבצע את קוד הפונקציה
            this._price = price * 1.18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FinanceManager.prototype, "bankName", {
        get: function () {
            return this._bankName;
        },
        set: function (bankName) {
            // ראשית, נבדוק אם המידע שגוי
            if (bankName != "Hapoalim") {
                throw new IllegalBankError(); // זריקת חריגה שאנו בנינו
            }
            // אם הכל בסדר, נבצע את קוד הפונקציה
            this._bankName = bankName;
        },
        enumerable: true,
        configurable: true
    });
    return FinanceManager;
}());
//# sourceMappingURL=financeManager.js.map