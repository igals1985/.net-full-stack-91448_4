//this file will throw an error in the new Person() command
//because classes are not hoisted, and must be declared before use
document.write("<br/><br/>-----------------Start--------------<br/>");
var person1 = new Person();
person1.firstName = "Vica";
person1.lastName = "S.";
document.write("<br/><br/>-----------------person1--------------<br/>");
document.write(person1.firstName + " " + person1.lastName + "<br/>");
person1.sayHelloFromPerson();
document.write("<br/><br/>-----------------End--------------<br/>");
//****************class Person******************//
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
//*********************************************//
//# sourceMappingURL=app.js.map