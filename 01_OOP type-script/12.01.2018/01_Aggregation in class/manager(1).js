var Manager = (function () {
    //ctor
    function Manager(fullName, age, salary) {
        this.fullName = fullName;
        this.age = age;
        this.salary = salary;
    }
    //actions
    Manager.prototype.getInfo = function () {
        var str = "fullName:" + this.fullName + ", age: " + this.age + ", salary: " + this.salary;
        return str;
    };
    Object.defineProperty(Manager.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (x) {
            if (x >= 20 && x <= 120) {
                this._age = x;
            }
            else {
                this._age = 20;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Manager.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (x) {
            if (x >= 20000) {
                this._salary = x;
            }
            else {
                this._salary = 20000;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Manager;
}());
//# sourceMappingURL=manager.js.map