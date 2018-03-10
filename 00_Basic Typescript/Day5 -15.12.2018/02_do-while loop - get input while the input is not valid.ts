const ORIGIN_COUNTRY: string = "Israel";
let destinition: string;
let price: number;


do {

    destinition = prompt("Where do you want to visit?");

} while (destinition != "NZ" && destinition != "HK" && destinition != "UK" && destinition != "USA");


switch (destinition) {
    case "NZ":
    case "HK": price = 900; break;
    case "UK": price = 700; break;
    case "USA": price = 1200; break;
}


document.write(`you want to fly from ${ORIGIN_COUNTRY} to ${destinition}<br/>it will cost you: ${price}$`);


