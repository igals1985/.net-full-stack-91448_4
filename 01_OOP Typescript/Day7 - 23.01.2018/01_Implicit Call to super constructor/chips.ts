class Chips extends Food {
    
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