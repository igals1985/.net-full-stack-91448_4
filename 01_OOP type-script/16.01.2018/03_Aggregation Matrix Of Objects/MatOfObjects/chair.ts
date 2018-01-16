class Chair {

    public color: string;
    private _price: number;
    private _isSold: boolean;
   

    constructor(price:number=0,isSold:boolean=false,color?: string) {

        //(!color) --> will return true when color is undefined
        this.color = (!color) ? this.getRandColor():color;
        this.isSold = isSold;
        this.price = price;
    }


    private getRandColor(): string {
        let colorArr: string[] = ["Red", "Green", "Blue", "Black", "Yellow"];
        let min: number = 0;
        let max: number = colorArr.length-1;
        let randNum: number = Math.round((Math.random() * (max - min)) + min);
        let randColor: string = colorArr[randNum];
        return randColor;
    }


    public printInfo(): string {
        return `isSold:${this.isSold}, color: ${this.color}, price: ${this.price}`;
    }

    public get isSold(): boolean {
        return this._isSold;
    }

    public set isSold(p: boolean) {
        this._isSold = p;

    }
    public get price(): number {
        return this._price;
    }

    public set price(p: number) {
        if (p > 20 && p < 400) {
            this._price = p;
        }
        else {
            this._price = Math.round(Math.random() * (400 - 20) + 20);
        }
        
    }
}