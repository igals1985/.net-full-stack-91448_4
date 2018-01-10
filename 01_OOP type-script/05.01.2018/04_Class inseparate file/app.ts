
document.write(`<br/><br/>-----------------Start--------------<br/>`);
let person1: Person = new Person();
person1.firstName = "Vica";
person1.lastName = "S.";

document.write(`<br/><br/>-----------------person1--------------<br/>`);
document.write(`${person1.firstName} ${person1.lastName}<br/>`);
person1.sayHelloFromPerson();

document.write(`<br/><br/>-----------------End--------------<br/>`);

