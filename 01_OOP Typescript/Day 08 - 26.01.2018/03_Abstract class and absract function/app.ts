let cinemaStore: FoodStore = new FoodStore();
cinemaStore.foodList=  [new Pizza(), new Chips(), new Chips(), new Pizza(), new PersonalPizza()];

for (let item of cinemaStore.foodList) {
    let minutes: number = Math.floor(Math.random() * (30 - 10) + 10);
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


document.write(`------------------------testAbtract---------------------------<br/>`);
for (let item of cinemaStore.foodList) {
    item.testAbtract();

}
