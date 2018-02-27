var Person = (function () {
    function Person(fullName, age) {
        this.nameField = fullName;
        this.ageField = (age >= 0 && age <= 120) ? age : 0;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.nameField;
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * @param birthdayPresent - this param is a function that get one parameter (number type) and returns void
     * @param timeToParty - this param is a number that represents the time that the setTimeOut will wait before calling the "birthdayPresent" function
       */
    Person.prototype.birthDayParty = function (birthdayPresent, timeToParty) {
        var _this = this;
        //זוהי פעולה אסינכרונית שלא מעכבת את המשך ביצוע הקוד setTimeout
        setTimeout(function () { birthdayPresent(_this.ageField); }, timeToParty);
        //*******************this part of code will be executed before the setTimeout is done*****************
        this.ageField++;
    };
    return Person;
}());
//# sourceMappingURL=person.js.map