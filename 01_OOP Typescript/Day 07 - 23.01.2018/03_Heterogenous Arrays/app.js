//Food יצירת מערך בן חמש תאים בו כל תא יכול להצביע לאובייקט מטיפוס 
//Food או נגזרת של 
//undefined אבל בשלב זה כל התאים מכילים 
var foodArray = new Array(5);
//אם התא במערך זוגי - הוא יצביע לאובייקט מסוג פיצה
//אחרת - יצביע לצ'יפס
for (var i = 0; i < foodArray.length; i++) {
    if (i % 2 == 0) {
        foodArray[i] = new Pizza();
    }
    else {
        foodArray[i] = new Chips();
    }
}
//Chips כאשר אנו יוצרים אובייקט של הנגזרת
//Food מתבצעת פניה גם לבנאי של הבסיס
var cinemaFoodStore = new FoodStore();
cinemaFoodStore.foodList = foodArray;
for (var _i = 0, _a = cinemaFoodStore.foodList; _i < _a.length; _i++) {
    var i = _a[_i];
    cinemaFoodStore.buyFood(i);
    document.write("-----------------------------------<br/>");
}
//# sourceMappingURL=app.js.map