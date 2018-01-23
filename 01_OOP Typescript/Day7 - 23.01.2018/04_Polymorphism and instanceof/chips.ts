class Chips extends Food {


    public constructor(price: number = 10, isVeg: boolean = true, calories: number = 120, foodName: string = "chips", isFried: boolean = true, shape: string ="Stick") {

        //'super' must be called before accessing 'this' in the constructor of a derived class.
        //---------------------------------------
        //this.isFried = true;  --> compilation error
        //---------------------------------------


        //בכל יצירה של אובייקטו נגזרת חובה לפנות לבנאי הבסיס - רק אם יצרנו בנאי
        super(price, isVeg, calories, foodName); //פניה לבנאי של הבסיס


        /*
        הערה חשובה:
        אין לפנות לאובייקט על ידי
        this
        כל עוד לא פנינו לבנאי הבסיס
        */


        this.isFried = isFried;
        this.shape = shape;
    }


    public buyInfo(): void {
        super.buyInfo();
        document.write(`isFried: ${this.isFried}, shape: ${this.shape}<br/>`)
    }
    private _isFried: boolean;

    public set isFried(prop: boolean) {
        this._isFried = prop;
    }

    public get isFried(): boolean {
        return this._isFried;
    }

    private _shape: string;

    public set shape(prop: string) {
        this._shape = (this.isValidShape(prop)) ? prop : "Stick" ;
    }

    public get shape(): string {
        return this._shape;
    }

    private isValidShape(x: string): boolean {
        return (x == "Round" || x == "Stick");
    }
}