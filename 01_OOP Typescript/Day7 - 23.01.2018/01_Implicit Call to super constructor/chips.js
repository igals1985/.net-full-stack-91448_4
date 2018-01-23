var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Chips = (function (_super) {
    __extends(Chips, _super);
    function Chips() {
        _super.apply(this, arguments);
    }
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