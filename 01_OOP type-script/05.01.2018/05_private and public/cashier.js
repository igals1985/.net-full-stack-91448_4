var Cashier = (function () {
    function Cashier() {
    }
    //***********first way to create a setter and a getter*********
    //get - will return the value of the private member
    //will allways return the member type, and will never get parameters
    Cashier.prototype.getCinemaName = function () {
        return this._cinemaName;
    };
    //set - will change the value of the private member
    //will allways return void, and will get a parameter with the member type
    Cashier.prototype.setCinemaName = function (cinemaName) {
        var tempName = "OriCinema";
        if (cinemaName != tempName) {
            this._cinemaName = cinemaName;
        }
    };
    return Cashier;
}());
//# sourceMappingURL=cashier.js.map