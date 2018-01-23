//ירושה יכולה להיות ממחלקה אחת בלבד!!!

class Animal {

    public animalName: string="Max";


    // getInfo() without any param
    public getInfo(): string {
        return this.animalName + " ";
    }

}


//Pet extends Animal
class Pet extends Animal {
    public price: number=700;


    //override function must match the template of the parent's function (params & returned value)
    public getInfo(): string {
        return super.getInfo() + this.price
    }

    /*

    ---------------------
    Error!!!!
    //Class 'Pet' incorrectly extends base class 'Animal'.
    //Types of property 'getInfo' are incompatible.
    //Type '(p: boolean) => string' is not assignable to type '() => string'
    ---------------------

    public getInfo(p: boolean): string {
        if (p)
            return super.getInfo() + this.price
        else
            return "I Am An Pet!";
    }

    */

}


//Dog extends Pet that extends Animal
class Dog extends Pet {
    public age: number;
}


let dog: Dog = new Dog();
document.write(dog.getInfo());  //Max 700

//Property 'age' exists on type 'Pet'
document.write(`<br/>${dog.price}<br/>`);  //700

let pet: Pet = new Pet();
document.write(pet.getInfo());  //Max 700

//Property 'age' does not exist on type 'Pet'
//document.write(`${pet.age}`);  //Max 700   -->ERROR


//כל בסיס יכול להצביע לאובייקטי נגזרת או לאובייקטים שלו - למופעים ממחלקות שירשו ממנו
let dog0: Dog = new Dog();
let dog1: Pet = new Dog();
let dog2: Animal = new Dog();


let pet0: Pet = new Pet();
let pet1: Animal = new Pet();

//pet does not extend dog
//Type 'Pet' is not assignable to type 'Dog'
//let pet2: Dog = new Pet();

let animal0: Animal = new Animal();
