var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CinemaTeamPartner = (function (_super) {
    __extends(CinemaTeamPartner, _super);
    function CinemaTeamPartner(age, fullName, isMale, address, cinemaName, salary) {
        _super.call(this, age, fullName, isMale, address);
        this.cinemaName = cinemaName;
        this.salary = salary;
    }
    //מימוש של פונקציה אבסרקטית מהבסיס
    CinemaTeamPartner.prototype.helloFromPerson1 = function () {
        return "Hello I an a CinemaTeamPartner!!";
    };
    Object.defineProperty(CinemaTeamPartner.prototype, "cinemaName", {
        get: function () {
            return this._cinemaName;
        },
        set: function (cinemaName) {
            if (cinemaName == "YesPlanet" || cinemaName == "CinemaCity" || cinemaName == "JB-Cinema") {
                this._cinemaName = cinemaName;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CinemaTeamPartner.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (x) {
            if (x >= 4000) {
                this._salary = x;
            }
            else {
                this._salary = 4000;
            }
        },
        enumerable: true,
        configurable: true
    });
    return CinemaTeamPartner;
}(Person));
//# sourceMappingURL=cinemaTeamPartner.js.map