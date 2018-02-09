var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IllegalBankError = (function (_super) {
    __extends(IllegalBankError, _super);
    function IllegalBankError() {
        _super.call(this);
        this.bankHit = "Hapoalim";
        this.message = "Not a legal Bank!!!!";
        this.name = "IllegalBankError";
    }
    return IllegalBankError;
}(Error));
//# sourceMappingURL=illegalBankError.js.map