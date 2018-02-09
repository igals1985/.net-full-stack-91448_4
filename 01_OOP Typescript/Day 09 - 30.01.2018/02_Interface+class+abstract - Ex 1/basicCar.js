/**
מחלקה אבסרקטית שיורשת ממחלקה אבסרקטית אחרת
לא חייבת לממש את כל הפונקציות או המשתנים האבסרקטיים של הבסיס
--------------------------
מה שלא מומש במחלקה האבסרקטית הזו
יהיה חובה לממש במחלקה הרגיחה שתירש בעתיד את המחלקה הזו
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BasicCar = (function (_super) {
    __extends(BasicCar, _super);
    function BasicCar() {
        _super.apply(this, arguments);
    }
    BasicCar.prototype.checkSpeed = function (speed) {
        return (speed >= this.minSpeed && speed <= this.maxSpeed);
    };
    return BasicCar;
}(Vehichle));
//# sourceMappingURL=basicCar.js.map