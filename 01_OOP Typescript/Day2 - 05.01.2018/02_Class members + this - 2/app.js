var Person = (function () {
    function Person() {
        this.address = "Tel Aviv";
    }
    //-----------------methods----------
    //--------פעולות המחלקה שהן פונקציות
    Person.prototype.sayHello = function () {
        document.write("Hello!!<br/>");
    };
    Person.prototype.sayHelloFromPerson = function () {
        document.write("Hello!! I am " + this.firstName + " " + this.lastName + ", and i live in " + this.address + "<br/>");
    };
    Person.prototype.setPersonAddress = function () {
        this.address = "Holon";
    };
    return Person;
}());
var person1 = new Person();
person1.firstName = "Vica";
person1.lastName = "S.";
document.write("<br/><br/>-----------------person1--------------<br/>");
document.write(person1.firstName + " " + person1.lastName + "<br/>");
person1.sayHello();
person1.sayHelloFromPerson();
person1.setPersonAddress();
person1.sayHelloFromPerson();
var person2 = new Person();
person2.firstName = "Tal";
person2.lastName = "D.";
document.write("<br/><br/>-----------------person2--------------<br/>");
document.write(person2.firstName + " " + person2.lastName + "<br/>");
person2.sayHello();
person2.sayHelloFromPerson();
//# sourceMappingURL=app.js.map