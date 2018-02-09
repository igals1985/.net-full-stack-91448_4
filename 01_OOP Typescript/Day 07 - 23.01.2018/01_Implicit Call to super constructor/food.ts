class Food {
    public constructor() {
        document.write("Food constructor");
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