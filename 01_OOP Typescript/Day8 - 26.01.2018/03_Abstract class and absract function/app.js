var cinemaStore = new FoodStore();
cinemaStore.foodList = [new Pizza(), new Chips(), new Chips(), new Pizza(), new PersonalPizza()];
for (var _i = 0, _a = cinemaStore.foodList; _i < _a.length; _i++) {
    var item = _a[_i];
    var minutes = Math.floor(Math.random() * (30 - 10) + 10);
    item.cookFood(minutes);
}
/*

output:
--------------------
Bake the Pizza 11 minutes
Fry the Chips 14 minutes
Fry the Chips 10 minutes
Bake the Pizza 16 minutes
Bake the Pizza 13 minutes

*/
document.write("------------------------testAbtract---------------------------<br/>");
for (var _b = 0, _c = cinemaStore.foodList; _b < _c.length; _b++) {
    var item = _c[_b];
    item.testAbtract();
}
//# sourceMappingURL=app.js.map