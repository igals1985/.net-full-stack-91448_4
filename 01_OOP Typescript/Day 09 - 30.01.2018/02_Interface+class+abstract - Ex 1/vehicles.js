var Vehichle = (function () {
    function Vehichle(vehichleName, vehichleSpeed, minSpeed, maxSpeed) {
        if (vehichleName === void 0) { vehichleName = "Bimba"; }
        if (vehichleSpeed === void 0) { vehichleSpeed = 100; }
        if (minSpeed === void 0) { minSpeed = 10; }
        if (maxSpeed === void 0) { maxSpeed = 150; }
        this.vehichleSpeed = 100;
        this.vehichleName = vehichleName;
        this.vehichleSpeed = vehichleSpeed;
        this.minSpeed = minSpeed;
        this.maxSpeed = maxSpeed;
    }
    //מימוש מלא של פונקציה שקיבלנו מהממשק 
    Vehichle.prototype.moveBackAction = function (speed) {
        document.write(this.vehichleName + " moves back in speed: " + speed + "<br/>");
    };
    return Vehichle;
}());
//# sourceMappingURL=vehicles.js.map