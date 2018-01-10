class Person {
    //-----------------properties----------
    //-----------מאפייני המחלקה שהם משתנים
    public firstName: string;
    public lastName: string;
    public address: string = "Tel Aviv";  //default value toa property



    //-----------------methods----------
    //--------פעולות המחלקה שהן פונקציות
    public sayHello(): void {
        document.write("Hello!!<br/>");
    }


    public sayHelloFromPerson(): void {
        document.write(`Hello!! I am ${this.firstName} ${this.lastName}, and i live in ${this.address}<br/>`);
    }


    public setPersonAddress(): void {
        this.address = "Holon";
    }

}


let person1: Person = new Person();
person1.firstName = "Vica";
person1.lastName = "S.";
document.write(`<br/><br/>-----------------person1--------------<br/>`);
document.write(`${person1.firstName} ${person1.lastName}<br/>`);
person1.sayHello();
person1.sayHelloFromPerson();
person1.setPersonAddress();
person1.sayHelloFromPerson();



let person2: Person = new Person();
person2.firstName = "Tal";
person2.lastName = "D.";
document.write(`<br/><br/>-----------------person2--------------<br/>`);
document.write(`${person2.firstName} ${person2.lastName}<br/>`);
person2.sayHello();
person2.sayHelloFromPerson();
