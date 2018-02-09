class Chips extends Food {


    public constructor(price: number = 10, isVeg: boolean = true, calories: number = 120, foodName: string = "chips", isFried: boolean = true, shape: string ="Stick") {

        //בכל יצירה של אובייקטו נגזרת חובה לפנות לבנאי הבסיס - רק אם יצרנו בנאי
        super(price, isVeg, calories, foodName); //פניה לבנאי של הבסיס


        this.isFried = isFried;
        this.shape = shape;
    }



    //מימוש לפונקציה האבסרקטית
    public cookFood(minutes: number): boolean {

        if (this.isFried) {
            document.write(`Fry the Chips ${minutes} minutes<br/>`);
        }
        else {
            document.write(`Bake the Chips ${minutes} minutes<br/>`);
        }
       
        return true;
    }

    //מימוש משתנה אבסרקטי
    //the implementation is via a setter and a getter
    private _isKosher: boolean=false;

    public get isKosher(): boolean {
        return this._isKosher;
    }


    public set isKosher(b: boolean) {
        this._isKosher = b;
    }


    public buyInfo(): void {
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