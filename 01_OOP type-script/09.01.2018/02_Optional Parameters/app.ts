let cashier1: Cashier = new Cashier();

/*in this case the values are:
ageProp = 18,
CinemaName = "CinemaCity",
fullName= "Bob"
*/
cashier1.setAllProperties();
cashier1.setSomeProperties(22);


let cashier2: Cashier = new Cashier();

/*in this case the values are:
ageProp = 19,
CinemaName = "CinemaCity",
fullName= "Bob"
*/
cashier2.setAllProperties(19);
cashier1.setSomeProperties(25,"Clarc");

let cashier3: Cashier = new Cashier();
/*in this case the values are:
ageProp = 30,
CinemaName = "YesPlanet",
fullName= "Bob"
*/
cashier3.setAllProperties(30, "YesPlanet");


let cashier4: Cashier = new Cashier();
/*in this case the values are:
ageProp = 21,
CinemaName = "YesPlanet",
fullName= "Alice"
*/
cashier4.setAllProperties(21, "YesPlanet","Alice");




let cashier5: Cashier = new Cashier();
/*in this case the values are:
ageProp = 18,
CinemaName = "YesPlanet",
fullName= "Alice"
*/

//undefined is a placeholder for a parameter that we want to use the default value
cashier5.setAllProperties(undefined, "YesPlanet", "Alice");





let cashier6: Cashier = new Cashier();
/*in this case the values are:
ageProp = 18,
CinemaName = "CinemaCity",
fullName= "Alice"
*/

//undefined is a placeholder for a parameter that we want to use the default value
cashier6.setAllProperties(undefined, undefined, "Alice");
