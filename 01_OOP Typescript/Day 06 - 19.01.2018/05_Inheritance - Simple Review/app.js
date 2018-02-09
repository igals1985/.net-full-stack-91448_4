//ירושה יכולה להיות ממחלקה אחת בלבד!!!
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal() {
        this.animalName = "Max";
    }
    // getInfo() without any param
    Animal.prototype.getInfo = function () {
        return this.animalName + " ";
    };
    return Animal;
}());
//Pet extends Animal
var Pet = (function (_super) {
    __extends(Pet, _super);
    function Pet() {
        _super.apply(this, arguments);
        this.price = 700;
    }
    //override function must match the parent function template (params & returned value)
    Pet.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + this.price;
    };
    return Pet;
}(Animal));
//Dog extends Pet that extends Anima
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    return Dog;
}(Pet));
var dog = new Dog();
document.write(dog.getInfo()); //Max 700
//Property 'age' exists on type 'Pet'
document.write("<br/>" + dog.price + "<br/>"); //700
var pet = new Pet();
document.write(pet.getInfo()); //Max 700
//Property 'age' does not exist on type 'Pet'
//document.write(`${pet.age}`);  //Max 700   -->ERROR
//כל בסיס יכול להצביע לאובייקטי נגזרת או לאובייקטים שלו - למופעים ממחלקות שירשו ממנו
var dog0 = new Dog();
var dog1 = new Dog();
var dog2 = new Dog();
var pet0 = new Pet();
var pet1 = new Pet();
//pet does not extend dog
//Type 'Pet' is not assignable to type 'Dog'
//let pet2: Dog = new Pet();
var animal0 = new Animal();
//# sourceMappingURL=app.js.map