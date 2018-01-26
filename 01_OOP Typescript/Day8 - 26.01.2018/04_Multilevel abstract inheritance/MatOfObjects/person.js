var Person = (function () {
    function Person(age, fullName, isMale, address) {
        Person.personCounter++;
        this.age = age;
        this.fullName = fullName;
        this.isMale = isMale;
        this.address = address;
    }
    //this is the getInfo() function in the base class
    Person.prototype.getInfo = function () {
        var str = "fullName:" + this.fullName + ", age: " + this.age + " ";
        return str;
    };
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (a) {
            this._age = (a >= 0 && a <= 120) ? a : 0;
        },
        enumerable: true,
        configurable: true
    });
    Person.personCounter = 0;
    return Person;
}());
//# sourceMappingURL=person.js.map