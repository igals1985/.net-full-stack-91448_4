var foodList = [new Pizza(), new Chips(), new Chips(), new Pizza(), new PersonalPizza()];
for (var i = 0; i < foodList.length; i++) {
    document.write("---------------------element " + i + "----------------<br/>");
    var tempFood = foodList[i];
    if (tempFood instanceof Pizza) {
        document.write("tempFood.numOfToppings: " + tempFood.numOfToppings + " <br/>");
    }
    if (tempFood instanceof PersonalPizza) {
        document.write("tempFood.size: " + tempFood.size + " <br/>");
    }
}
//# sourceMappingURL=app.js.map