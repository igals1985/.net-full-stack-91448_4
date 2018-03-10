const ORIGIN_COUNTRY: string = "Israel";
let destinition: string = prompt("Where do you want to visit?");
let price: number;

switch (destinition) {
    case "NZ":
    case "HK": price = 900; break;
    case "UK": price = 700; break;
    case "USA": price = 1200; break;
    default: price = 0;
}

if (price == 900) {
    alert("YOU WANT TO VISIT NZ || HK");
}
else if (price == 700) {
    alert("YOU WANT TO VISIT UK");
}
else if (price == 1200) {
    alert("YOU WANT TO VISIT USA");
}
else {
    alert("Please select one of the following countries:\nNZ || HK ||UK ||USA");
}

let msg: string = (price == 0) ? "stay in your house, and leran TS" : "have a nice fly";

document.write(`you want to fly from ${ORIGIN_COUNTRY} to ${destinition}<br/>it will cost you: ${price}$<br/>${msg}`);

