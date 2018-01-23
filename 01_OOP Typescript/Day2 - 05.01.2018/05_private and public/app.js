var cashier = new Cashier();
var nameTemp = prompt("Enter your name:");
if (nameTemp != "Ori") {
    cashier.fullName = nameTemp;
}
document.write("fullName: " + cashier.fullName + "<br/>");
//cashier._cinemaName = "YesPlanet";  --> Compilation Error - is private
document.write("Before set: " + cashier.getCinemaName() + "<br/>");
cashier.setCinemaName("YesPlanet");
document.write("After set 1: " + cashier.getCinemaName() + "<br/>");
cashier.setCinemaName("OriCinema");
document.write("After set 2: " + cashier.getCinemaName() + "<br/>");
//# sourceMappingURL=app.js.map