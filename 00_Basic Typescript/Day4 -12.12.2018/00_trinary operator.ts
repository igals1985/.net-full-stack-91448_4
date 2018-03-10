let isOpen: boolean = confirm("The rest is open now?");

let msg: string;

msg = isOpen ? "the time is now between 8:00AM- 9:00PM" : "please come again at 8:00AM";

alert(msg);

let price: number = Number(prompt("how much money do you have?"));

msg = price > 10 ? "you can buy food" : msg;

alert(msg);

if (price > 10) {
    msg = "you can buy food";
}
else{
        msg = "you can buy drink";
}


alert(msg);
