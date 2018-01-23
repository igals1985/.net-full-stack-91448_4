let cashier: Cashier = new Cashier();


let nameTemp: string = prompt("Enter your name:");

//fullName is public
if (nameTemp != "Ori") {
    cashier.fullName = nameTemp;
}
document.write("fullName: " + cashier.fullName + "<br/>");


//Compilation Error --> _cinemaName is private
//cashier._cinemaName = "YesPlanet";  

document.write("Before set: "+cashier.getCinemaName()+"<br/>");

cashier.setCinemaName("YesPlanet");
document.write("After set 1: " + cashier.getCinemaName() + "<br/>");

cashier.setCinemaName("OriCinema");
document.write("After set 2: " + cashier.getCinemaName() + "<br/>");

