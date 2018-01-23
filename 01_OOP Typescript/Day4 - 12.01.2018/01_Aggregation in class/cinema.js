var Cinema = (function () {
    //ctor
    function Cinema(cinemaName) {
        if (cinemaName === void 0) { cinemaName = "JB-Cinema"; }
        this.cinemaName = cinemaName;
    }
    Object.defineProperty(Cinema.prototype, "manager", {
        //actions
        get: function () {
            return this._manager;
        },
        set: function (x) {
            this._manager = x;
        },
        enumerable: true,
        configurable: true
    });
    Cinema.prototype.getInfo = function () {
        var str = "cinemaName: " + this.cinemaName + "<br/>manager: " + this.manager.getInfo() + "<br/>";
        return str;
    };
    return Cinema;
}());
//# sourceMappingURL=cinema.js.map