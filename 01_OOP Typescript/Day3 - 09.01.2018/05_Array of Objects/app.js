var cashier1 = new Cashier(22, "YesPlanet", "Bob");
document.write(cashier1.printInfo() + "<br/>");
console.log(cashier1.printInfo());
var cashier2 = new Cashier();
document.write(cashier2.printInfo() + "<br/>");
console.log(cashier2.printInfo());
var shift1 = new Shift();
var cashierArray;
cashierArray = new Array(shift1.numOfCashiers);
for (var i = 0; i < cashierArray.length; i++) {
    cashierArray[i] = new Cashier();
}
shift1.cashierArr = cashierArray;
console.log(shift1);
//# sourceMappingURL=app.js.map