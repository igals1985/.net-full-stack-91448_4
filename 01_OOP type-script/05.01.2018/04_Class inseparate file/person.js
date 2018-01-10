var Person = (function () {
    function Person() {
    }
    //-----------------methods----------
    //--------פעולות המחלקה שהן פונקציות
    Person.prototype.sayHelloFromPerson = function () {
        document.write("Hello!! I am " + this.firstName + " " + this.lastName + "<br/>");
    };
    return Person;
}());
//# sourceMappingURL=person.js.map