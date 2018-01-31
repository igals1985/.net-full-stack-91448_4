class Student extends Person implements IMoveLeft,IMoveRight{

    private _age: number;


    //========דרך ראשונה===========
    //מימוש של המשתנה מהמחלקה האבסרקטית
    public isMale: boolean=true;


    //========דרך שניה===========
    //מימוש של המשתנה מהמחלקה האבסרקטית
    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        if (age >= 5 && age <= 80) {
            this._age = age;
        }
        else {
            this._age = 5;
        }
    }

    //מימוש מלא של פונקציה שקיבלנו מהממשק 
    public moveLeftAction(speed: number): void {
        document.write(`${this.fullName} moves left in speed: ${speed}<br/>`)
    }

    //מימוש מלא של פונקציה שקיבלנו מהממשק 
    public moveRightAction(speed: number): void {
        document.write(`${this.fullName} moves right in speed: ${speed}<br/>`)
    }
}