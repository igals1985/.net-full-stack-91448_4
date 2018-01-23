var foodList = [new Pizza(), new Chips(), new Food(), new Chips(), new Pizza()];
for (var i = 0; i < foodList.length; i++) {
    var tempFood = foodList[i];
    if (tempFood instanceof Pizza) {
        tempFood.numOfToppings = 2; //כאן אין צורך בהמרה מפורשת
    }
    if (foodList[i] instanceof Pizza) {
        //foodList[i].numOfToppings = 2;  -->compilation error   // יש צורך בהמרה מפורשת
        foodList[i].numOfToppings = 3; //המרה מפורשת - דרך ראשונה
        (foodList[i]).numOfToppings = 3; //המרה מפורשת - דרך שניה
    }
}
//# sourceMappingURL=app.js.map