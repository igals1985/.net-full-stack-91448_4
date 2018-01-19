//קופאי הוא גם בנאדם
//לכן יש כאן הורשה

// Person המחלקה הזו יורשת ממחלקת
class Cashier extends Person {
    
    private _cinemaName: string;



    public printInfo(): string {
        return `${this.fullName} is ${this.age} yers old, and works in ${this.cinemaName}`
    }

    public get cinemaName(): string {
        return this._cinemaName;
    }

    public set cinemaName(cinemaName: string) {
        if (cinemaName == "YesPlanet" || cinemaName == "CinemaCity" || cinemaName == "JB-Cinema") {
            this._cinemaName = cinemaName;
        }

    }

  
    public getInfo(): string {
    
       //super - is a keyword that refers to the base class (in this case "super" is Person)
        let str: string = super.getInfo() +`, cinemaName: ${this.cinemaName}`;
        return str;
    }


  
}