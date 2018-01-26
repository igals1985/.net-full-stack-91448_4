let cinema1: Cinema = new Cinema();

let address1: Address = new Address();
address1.city = "Tel Aviv";
address1.houseNumber = 29;
address1.state = "Israel";
address1.street = "Hamasger"; 


cinema1.manager = new Manager(21, "Sean", false, address1, cinema1.cinemaName, 25000, true);
cinema1.morningShift = new Shift();


cinema1.morningShift.cashierArr = new Array<Cashier>(
    new Cashier(21, "Bob", true, address1, cinema1.cinemaName, 5000, false),
    new Cashier(23, "Alice", false, address1, cinema1.cinemaName, 5600, false),
    new Cashier(27, "Clarc", true, address1, cinema1.cinemaName, 7000, false)
);


cinema1.nightShift = new Shift(18, 0, 4);

cinema1.nightShift.cashierArr = new Array<Cashier>(

    new Cashier(21, "Anna", false, address1, cinema1.cinemaName, 6500, true),
    new Cashier(23, "Netanel", true, address1, cinema1.cinemaName, 7000, true),
    new Cashier(27, "Boris", true, address1, cinema1.cinemaName, 8600, true),
    new Cashier(27, "Yaniv", true, address1, cinema1.cinemaName, 8000, true)
);

cinema1.chairMat = new Array<Array<Chair>>(4);

for (let i: number = 0; i < cinema1.chairMat.length; i++) {
    cinema1.chairMat[i] = new Array<Chair>(4);

    for (let j: number = 0; j < cinema1.chairMat[i].length; j++) {
        cinema1.chairMat[i][j] = new Chair();
    }
}
document.write(`${cinema1}`);

document.write(`${cinema1.manager}`);  //[object Object]
