var Address = (function () {
    function Address() {
    }
    Object.defineProperty(Address.prototype, "houseNumber", {
        get: function () {
            return this._houseNumber;
        },
        set: function (num) {
            if (num > 0) {
                this._houseNumber = Math.floor(num);
            }
            else {
                this._houseNumber = 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Address;
}());
//# sourceMappingURL=address.js.map