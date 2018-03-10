let wantsToBuyFood: boolean;
let chosenItem: string;

wantsToBuyFood = confirm("Do you want to buy food?");

if (wantsToBuyFood) {
    alert("wants To Buy Food");

    let wantMeat: boolean = confirm("Do yo want meat?");

    if (wantMeat) {
        chosenItem = "meat";
    }
    else {
        chosenItem = "veagan";
    }
}
else {
    alert("wants To Buy Drink");

    let wantCoke: boolean = confirm("do you want coke?");
    if (wantCoke) {
        chosenItem = "coke";
    }
    else {
        chosenItem = "fanta";
    }
}


alert(chosenItem);