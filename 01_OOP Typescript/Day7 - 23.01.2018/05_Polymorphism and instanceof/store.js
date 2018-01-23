var FoodStore = (function () {
    function FoodStore() {
    }
    Object.defineProperty(FoodStore.prototype, "foodList", {
        get: function () {
            return this._foodList;
        },
        set: function (prop) {
            this._foodList = prop;
        },
        enumerable: true,
        configurable: true
    });
    FoodStore.prototype.buyFood = function (prop) {
        prop.buyInfo();
        document.write("==============================<br/>");
        //חלק זה יבוצע עבור כל אובייקט
        //Food יכול להיות 
        //Food או נגזרת של 
        if (prop instanceof Food) {
            document.write("pls pay " + prop.price + "$ for the " + prop.foodName + "<br/>");
        }
        //Property 'numOfToppings' does not exist on type 'Food'
        //document.write(`Pizza info: numOfToppings ${prop.numOfToppings}<br/>`);  //-->compilation error
        //חלק זה יתבצע רק אם הפרמטר שהועבר לפונקציה הוא פיצה
        //prop בדיקה האם האובייקט הספציפי עליו מצביע 
        //Pizza הוא אובייקט מהמחלקה 
        //Pizza או אובייקט נגזרת של
        if (prop instanceof Pizza) {
            //prop בתוך האזור הזה האובייקט
            //Pizza נחשב מסוג 
            document.write("Pizza info: numOfToppings " + prop.numOfToppings + "<br/>");
        }
        else if (prop instanceof Chips) {
            document.write("Chips info: shape - " + prop.shape + ", isFried- " + prop.isFried + "<br/>");
        }
    };
    return FoodStore;
}());
//# sourceMappingURL=store.js.map