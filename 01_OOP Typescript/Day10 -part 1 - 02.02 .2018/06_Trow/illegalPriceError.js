var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// בניית חריגה ספציפית עבור מחיר שגוי
var IllegalPriceError = (function (_super) {
    __extends(IllegalPriceError, _super);
    function IllegalPriceError() {
        _super.call(this);
        this.message = "Not a legal Price!!!!";
        this.name = "IllegalPriceError";
    }
    return IllegalPriceError;
}(Error));
//# sourceMappingURL=illegalPriceError.js.map