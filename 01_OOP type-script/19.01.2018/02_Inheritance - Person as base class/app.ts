
document.write("Person.personCounter - START: "+Person.personCounter + "<br/>");

//every time that we call "new Manager()" it will also create "new Person()"
let manager1: Manager = new Manager();

manager1.age = 30;
manager1.fullName = "Sean S.";
manager1.salary = 20000;

manager1.address = new Address();
manager1.address.city = "Tel-Aviv";

document.write(manager1.getInfo() + "<br/>");


//the function helloFromPerson() exists only in the Person class
//the function helloFromPerson() is not overrided by the Manager class
//so the execution will call the function in the Person class
document.write(manager1.helloFromPerson() + "<br/>");

//every time that we call "new Cashier()" it will also create "new Person()"
let cashier1: Cashier = new Cashier();

cashier1.age = 25;
cashier1.fullName = "Igal";
cashier1.cinemaName = "JB-Cinema";

cashier1.address = new Address();
cashier1.address.city = "Rehovot";

document.write(cashier1.getInfo() + "<br/>");


//the function helloFromPerson() exists only in the Person class
//the function helloFromPerson() is not overrided by the Cashier class
//so the execution will call the function in the Person class
document.write(cashier1.helloFromPerson() + "<br/>");

document.write("Person.personCounter - END: " + Person.personCounter + "<br/>");



