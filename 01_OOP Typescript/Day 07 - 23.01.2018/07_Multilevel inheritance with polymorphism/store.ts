class FoodStore {

    //הכלה של מערך מאכלים
    //Food כל תא במערך יכול להצביע או לאובייקט מטיפוס
    //Food או לאובייקט נגזרת של 
    private _foodList: Food[];

    public set foodList(prop: Food[]) {
        this._foodList = prop;
    }

    public get foodList(): Food[] {
        return this._foodList;
    }


    public buyFood(prop: Food): void{
        

        if (prop instanceof Food) {
            document.write(`pls pay ${prop.price}$ for the ${prop.foodName}<br/>`);
        }

    
        if (prop instanceof Pizza) {


            //prop בתוך האזור הזה האובייקט
            //Pizza נחשב מסוג 
            document.write(`Pizza info: numOfToppings ${prop.numOfToppings}<br/>`);
        }
            //חלק זה יתבצע רק אם הפרמטר שהועבר לפונקציה הוא צ'יפס
        else if (prop instanceof Chips) {
            document.write(`Chips info: shape - ${prop.shape}, isFried- ${prop.isFried}<br/>`);
        }
    }
}