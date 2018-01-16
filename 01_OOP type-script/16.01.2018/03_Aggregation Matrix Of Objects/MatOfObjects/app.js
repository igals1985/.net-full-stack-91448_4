var cinema1 = new Cinema();
cinema1.morningShift = new Shift();
cinema1.morningShift.cashierArr = new Array(new Cashier(21, cinema1.cinemaName, "Bob"), new Cashier(23, cinema1.cinemaName, "Alice"), new Cashier(27, cinema1.cinemaName, "Clarc"));
cinema1.nightShift = new Shift(18, 0, 4);
cinema1.nightShift.cashierArr = new Array(new Cashier(21, cinema1.cinemaName, "Anna"), new Cashier(23, cinema1.cinemaName, "Netanel"), new Cashier(27, cinema1.cinemaName, "Boris"), new Cashier(27, cinema1.cinemaName, "Yaniv"));
cinema1.chairMat = new Array(4);
for (var i = 0; i < cinema1.chairMat.length; i++) {
    cinema1.chairMat[i] = new Array(4);
    for (var j = 0; j < cinema1.chairMat[i].length; j++) {
        cinema1.chairMat[i][j] = new Chair();
    }
}
document.write("Old CinemaAgency.phoneNumber: " + CinemaAgency.phoneNumber);
document.write("<br/>cinema Agency Info:<br/><br/> ");
var cinemaAgency = new CinemaAgency();
//Left- hand side of assignment expression cannot be a constant or a read- only property
//cinemaAgency.addressCity = "Haifa"; -->Error
document.write("cinemaAgency.addressCity: " + cinemaAgency.addressCity + "<br/>");
document.write("Old cinemaAgency.addressCountry: " + cinemaAgency.addressCountry + "<br/>");
cinemaAgency.addressCountry = "USA";
document.write("New cinemaAgency.addressCountry: " + cinemaAgency.addressCountry + "<br/>");
document.write("Old CinemaAgency.phoneNumber: " + CinemaAgency.phoneNumber + "<br/>");
CinemaAgency.phoneNumber = "04-08597356";
document.write("New CinemaAgency.phoneNumber: " + CinemaAgency.phoneNumber + "<br/>");
//Left- hand side of assignment expression cannot be a constant or a read- only property
//CinemaAgency.agencyName = "Test Agency";  -->Error
document.write("CinemaAgency.agencyName: " + CinemaAgency.agencyName + "<br/>");
document.write(cinema1.getInfo());
console.log(cinema1.getInfo());
console.log(cinema1);
//# sourceMappingURL=app.js.map