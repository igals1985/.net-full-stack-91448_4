class Pizza extends Food {


    public constructor(price: number = 10, isVeg: boolean = true, calories: number = 120, foodName: string = "pizza", numOfToppings: number = 0) {

        //בכל יצירה של אובייקטו נגזרת חובה לפנות לבנאי הבסיס - רק אם יצרנו בנאי
        super(price, isVeg, calories, foodName); //פניה לבנאי של הבסיס

     
        this.numOfToppings = numOfToppings;
        this.isKosher = true;
      
    }

    //מימוש לפונקציה האבסטרקטית
    public cookFood(minutes: number): boolean {
        document.write(`Bake the Pizza ${minutes} minutes<br/>`);
        return true;
    }

    //מימוש משתנה אבסטרקטי
    public isKosher: boolean=true;


    public buyInfo(): void {
        //super.buyInfo();
        document.write(`numOfToppings: ${this.numOfToppings}<br/>`)
    }


    private _numOfToppings: number;

    public set numOfToppings(prop: number) {
        this._numOfToppings = prop>=0?prop:0;
    }

    public get numOfToppings(): number {
        return this._numOfToppings;
    }

   
}