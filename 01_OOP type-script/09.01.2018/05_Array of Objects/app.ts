let cashier1: Cashier = new Cashier(22, "YesPlanet", "Bob");

document.write(cashier1.printInfo() + "<br/>");
console.log(cashier1.printInfo());



let cashier2: Cashier = new Cashier();

document.write(cashier2.printInfo()+"<br/>");
console.log(cashier2.printInfo());


let shift1 = new Shift();
let cashierArray: Array<Cashier>;

cashierArray = new Array<Cashier>(shift1.numOfCashiers);

for (let i: number = 0; i < cashierArray.length; i++) {
    cashierArray[i] = new Cashier();
}

shift1.cashierArr = cashierArray;


console.log(shift1);











