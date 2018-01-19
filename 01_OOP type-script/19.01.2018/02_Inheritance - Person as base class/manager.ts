//מנהל הוא גם בנאדם
//לכן יש כאן הורשה

// Person המחלקה הזו יורשת ממחלקת
class Manager extends Person{

    private _salary: number;

 
    public getInfo(): string {
       
        //super - is a keyword that refers to the base class (in this case "super" is Person)
       let str: string = super.getInfo()+`, salary: ${this.salary}`;
        return str;
    }

    //actions
    get salary(): number {
        return this._salary;
    }


    set salary(x: number) {
        if (x >= 20000) {
            this._salary = x;
        }
        else {
            this._salary = 20000;
        }
    }
}