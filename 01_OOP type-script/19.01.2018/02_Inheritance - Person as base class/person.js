var Person = (function () {
    function Person() {
        console.log("A new Person is created!!!");
        Person.personCounter++;
    }
    //this is the getInfo() function in the base class
    Person.prototype.getInfo = function () {
        var str = "fullName:" + this.fullName + ", age: " + this.age + " ";
        return str;
    };
    //this is the helloFromPerson() function in the base class
    Person.prototype.helloFromPerson = function () {
        return "hello From Person!!!";
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