class Food {
    public constructor(price: number = 10, isVeg: boolean = false, calories: number, foodName:string) {
        document.write("Food constructor");

        this.price = price;
        this.isVeg = isVeg;
        this.calories = calories;
        this.foodName = foodName;
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