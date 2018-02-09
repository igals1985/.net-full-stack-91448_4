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



        prop.buyInfo();
        document.write(`==============================<br/>`);
        //חלק זה יבוצע עבור כל אובייקט
        //Food יכול להיות 
        //Food או נגזרת של 
        if (prop instanceof Food) {
            document.write(`pls pay ${prop.price}$ for the ${prop.foodName}<br/>`);
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
            document.write(`Pizza info: numOfToppings ${prop.numOfToppings}<br/>`);
        }



            //חלק זה יתבצע רק אם הפרמטר שהועבר לפונקציה הוא צ'יפס
        else if (prop instanceof Chips) {
            document.write(`Chips info: shape - ${prop.shape}, isFried- ${prop.isFried}<br/>`);
        }
    }
}