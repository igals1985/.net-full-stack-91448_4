var Cashier = (function () {
    function Cashier() {
    }
    //***********way 1 -  to create a setter and a getter function*********
    //get - will return the value of the private member
    //will allways return the member type, and will never get parameters
    Cashier.prototype.getCinemaName = function () {
        return this._cinemaName;
    };
    //set - will change the value of the private member
    //will allways return void, and will get a single parameter with the member type
    Cashier.prototype.setCinemaName = function (cinemaName) {
        if (cinemaName == "YesPlanet" || cinemaName == "CinemaCity") {
            this._cinemaName = cinemaName;
        }
    };
    Object.defineProperty(Cashier.prototype, "age", {
        //***********way 2 -  to create a setter and a getter property*********
        get: function () {
            return this._age;
        },
        set: function (ageProp) {
            if (ageProp >= 17 && ageProp <= 80)
                this._age = ageProp;
        },
        enumerable: true,
        configurable: true
    });
    //default value for parameter
    Cashier.prototype.setAllProperties = function (ageProp, CinemaName, fullName) {
        if (ageProp === void 0) { ageProp = 18; }
        if (CinemaName === void 0) { CinemaName = "CinemaCity"; }
        if (fullName === void 0) { fullName = "Bob"; }
        this.age = ageProp;
        this.setCinemaName(CinemaName);
        this.fullName = fullName;
        document.write("---------- Cashier Info setAllProperties-------<br/>");
        document.write("age: " + this.age + "<br/>");
        document.write("CinemaName: " + this.getCinemaName() + "<br/>");
        document.write("fullName: " + this.fullName + "<br/>");
    };
    //optional parameter
    Cashier.prototype.setSomeProperties = function (ageProp, fullName) {
        this.age = ageProp;
        this.fullName = fullName;
        document.write("---------- Cashier Info setSomeProperties-------<br/>");
        document.write("age: " + this.age + "<br/>");
        document.write("fullName: " + this.fullName + "<br/>");
    };
    return Cashier;
}());
//# sourceMappingURL=cashier.js.map