//****************class Person******************//
class Person {
    //-----------------properties----------
    //-----------מאפייני המחלקה שהם משתנים
    public firstName: string;
    public lastName: string;



    //-----------------methods----------
    //--------פעולות המחלקה שהן פונקציות

    public sayHelloFromPerson(): void {
        document.write(`Hello!! I am ${this.firstName} ${this.lastName}<br/>`);
    }
}
//*********************************************//



//createing an instance of the Person class
let person1: Person = new Person();
person1.firstName = "Vica";
person1.lastName = "S.";

document.write(`${person1.firstName} ${person1.lastName}<br/>`);
person1.sayHelloFromPerson();

