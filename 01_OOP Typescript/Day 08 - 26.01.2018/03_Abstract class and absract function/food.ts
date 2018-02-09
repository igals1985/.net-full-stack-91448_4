//מחלקת בסייס לכל המאכלים - מחלקה מופשטת
//מחלקה מופשטת - מחלקה אבסטרקטית


//************** abstract - a keyword to create an abstract class
abstract class Food {
    public constructor(price: number = 10, isVeg: boolean = false, calories?: number, foodName?:string) {
        this.price = price;
        this.isVeg = isVeg;
        this.calories = calories;
        this.foodName = foodName;
    }


    //הגדרה של פונקציה אבסטרקטית
    //פונקציה אבסטרקטית היא פונקציה המכילה רק את שם הפונקציה, הפרמטרים והערך המוחזר
    //ללא גוף הפונקציה
    //את הפונקציה האבסרקטית נממש בנגזרת
    public abstract cookFood(minutes: number): boolean;


    //הגדרת משתנה אבסטרקטי
    //המשתנה האבסטרקטי הזה לא מוגדר בתור משתנה מחלקה רגיל
    //אלא רק בתור הוראה לנגזרות - להגדיר משתנה לפי התבנית הזו
    public abstract isKosher: boolean;



    public testAbtract(): void{
        this.cookFood(20);  //פניה לפונקציה אבסטרקטית
        document.write(`isKosher: ${this.isKosher} <br/>`); //פניה למשתנה אבסטרקטי
    }

    public buyInfo(): void {
        document.write(`${this.foodName} info - price: ${this.price}, isVeg: ${this.isVeg}, calories: ${this.calories}<br/>`)
    }


    private _price: number;

    public set price(prop: number) {
        this._price = (prop>0)?prop:1;
    }

    public get price(): number {
        return this._price;
    }

    private _isVeg: boolean;

    public set isVeg(prop: boolean) {
        this._isVeg = prop;
    }

    public get isVeg(): boolean {
        return this._isVeg;
    }


    private _calories: number;

    public set calories(prop: number) {
        this._calories = (prop > 0) ? prop : 1;
    }

    public get calories(): number {
        return this._calories;
    }

    private _foodName: string;

    public set foodName(prop: string) {
        this._foodName = prop;
    }

    public get foodName(): string {
        return this._foodName;
    }
}