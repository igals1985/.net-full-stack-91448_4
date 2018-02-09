//Food יצירת מערך בן חמש תאים בו כל תא יכול להצביע לאובייקט מטיפוס 
//Food או נגזרת של 
//undefined אבל בשלב זה כל התאים מכילים 
let foodArray: Food[] = new Array<Food>(5);  



//אם התא במערך זוגי - הוא יצביע לאובייקט מסוג פיצה
//אחרת - יצביע לצ'יפס
for (let i: number = 0; i < foodArray.length; i++) {
    if (i % 2 == 0) {
        foodArray[i] = new Pizza();
    }
    else {
        foodArray[i] = new Chips();
    }
}



//Chips כאשר אנו יוצרים אובייקט של הנגזרת
//Food מתבצעת פניה גם לבנאי של הבסיס

let cinemaFoodStore: FoodStore = new FoodStore();
cinemaFoodStore.foodList = foodArray;



for (let i of cinemaFoodStore.foodList) {
    cinemaFoodStore.buyFood(i);
    document.write(`-----------------------------------<br/>`);

}


