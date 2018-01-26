class PersonalPizza extends Pizza {


    //במחלקה הזו אין מימוש של בנאי
    //ולכן נוצר בנאי דיפולטיבי שמבצע פניה לבנאי הבסיס

    private _size: string = "Small";

    public set size(prop: string) {
        if (prop == "Small" || prop == "Large") {
            this._size = prop;
        }
        else {
            this._size = "Small";
        }
    }

    public get size(): string {
        return this._size;
    }
}