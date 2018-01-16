var Cinema = (function () {
    //ctor
    function Cinema(cinemaName) {
        if (cinemaName === void 0) { cinemaName = "JB-Cinema"; }
        this.openDaysInWeek = 7; //primitive
        this.manager = new Manager("Sean", 20, 20000); //ref
        this.cinemaName = cinemaName;
        Cinema._cinemaCounter++;
    }
    Object.defineProperty(Cinema, "cinemaCounter", {
        //actions
        get: function () {
            return Cinema._cinemaCounter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "morningShift", {
        get: function () {
            return this._morningShift;
        },
        set: function (x) {
            this._morningShift = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "nightShift", {
        get: function () {
            return this._nightShift;
        },
        set: function (x) {
            this._nightShift = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "chairMat", {
        get: function () {
            return this._chairMat;
        },
        set: function (x) {
            this._chairMat = x;
        },
        enumerable: true,
        configurable: true
    });
    Cinema.prototype.addShiftInfo = function (x) {
        var tempStr = "";
        for (var i = 0; i < x.length; i++) {
            tempStr += "cashier number " + i + ": " + x[i].printInfo() + "<br/>";
        }
        return tempStr;
    };
    Cinema.prototype.addChairMatInfo = function (x) {
        var tempStr = "";
        for (var i = 0; i < x.length; i++) {
            tempStr += "<br/><br/>row number " + i + ":<br/>";
            for (var j = 0; j < x[i].length; j++) {
                tempStr += "chair number " + j + ": " + x[i][j].printInfo() + "<br/>";
            }
        }
        return tempStr;
    };
    Cinema.prototype.getInfo = function () {
        var str = "cinemaName: " + this.cinemaName + "<br/><br/>manager: " + this.manager.getInfo() + "<br/>";
        str += "<br/>morningShift cashiers:--------------------------<br/>";
        str += this.addShiftInfo(this.morningShift.cashierArr);
        str += "<br/>nightShift cashiers:--------------------------<br/>";
        str += this.addShiftInfo(this.nightShift.cashierArr);
        str += "<br/>chairMat Info:--------------------------<br/>";
        str += this.addChairMatInfo(this.chairMat);
        return str;
    };
    Cinema._cinemaCounter = 0;
    return Cinema;
}());
//# sourceMappingURL=cinema.js.map