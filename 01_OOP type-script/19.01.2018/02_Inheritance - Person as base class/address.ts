class Address {

    public city: string;
    public state: string;
    public street: string;
    private _houseNumber: number;



    public set houseNumber(num: number) {
        if (num > 0) {
            this._houseNumber = Math.floor(num);
        }
        else {
            this._houseNumber = 1;
        }
    }


    public get houseNumber(): number {
        return this._houseNumber;
    }
}
