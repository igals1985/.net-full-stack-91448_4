let foodList: Food[] = [new Pizza(), new Chips(), new Chips(), new Pizza(), new PersonalPizza()];

for (let i: number = 0; i < foodList.length; i++) {


    document.write(`---------------------element ${i}----------------<br/>`);
    let tempFood: Food = foodList[i];


    if (tempFood instanceof Pizza) {
        document.write(`tempFood.numOfToppings: ${tempFood.numOfToppings} <br/>`); 
    }


    if (tempFood instanceof PersonalPizza) {
        document.write(`tempFood.size: ${tempFood.size} <br/>`);
    }


    
}

