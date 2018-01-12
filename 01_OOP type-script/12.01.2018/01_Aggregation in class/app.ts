let cinema1: Cinema = new Cinema();
cinema1.manager = new Manager(undefined,20,20000);
cinema1.manager.fullName = "Sean";

document.write(cinema1.getInfo());
console.log(cinema1.getInfo());
console.log(cinema1);


