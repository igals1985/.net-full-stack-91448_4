let foodList: Food[] = [new Pizza(), new Chips(), new Food(), new Chips(), new Pizza()];

for (let i: number = 0; i < foodList.length; i++) {

    let tempFood: Food = foodList[i];


    if (tempFood instanceof Pizza) {
        tempFood.numOfToppings = 2;  //כאן אין צורך בהמרה מפורשת
    }

    if (foodList[i] instanceof Pizza) {

        //foodList[i].numOfToppings = 2;  -->compilation error   // יש צורך בהמרה מפורשת
        (<Pizza>foodList[i]).numOfToppings = 3;  //המרה מפורשת - דרך ראשונה
        ((foodList[i]) as Pizza).numOfToppings = 3;   //המרה מפורשת - דרך שניה
    }


}

