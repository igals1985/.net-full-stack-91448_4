var cinema1 = new Cinema();
cinema1.manager = new Manager(undefined, 20, 20000);
cinema1.manager.fullName = "Sean";
cinema1.morningShift = new Shift();
cinema1.morningShift.cashierArr = new Array(new Cashier(21, cinema1.cinemaName, "Bob"), new Cashier(23, cinema1.cinemaName, "Alice"), new Cashier(27, cinema1.cinemaName, "Clarc"));
cinema1.nightShift = new Shift(18, 0, 4);
cinema1.nightShift.cashierArr = new Array(new Cashier(21, cinema1.cinemaName, "Anna"), new Cashier(23, cinema1.cinemaName, "Netanel"), new Cashier(27, cinema1.cinemaName, "Boris"), new Cashier(27, cinema1.cinemaName, "Yaniv"));
document.write(cinema1.getInfo());
console.log(cinema1.getInfo());
console.log(cinema1);
//# sourceMappingURL=app.js.map