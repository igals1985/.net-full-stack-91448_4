class Calc {

    private _operation: string;  //not static!!!

    private static _countCalcActions: number = 0;

    private static countCalc: number = 0;

    public static readonly PI = 3.14;  //static readonly can be assigned only in this row


    public constructor(operation: string) {

        this.operation = operation;  //access non-static member via "this" (the current oblect)

        Calc.countCalc++;  //access static member via class name
    }


    //******************read-only property***********************
    //a private member that has only a get (does not have a set)
    //can be modified only inside the class , but not outside the class
    public static get countCalcActions(): number {

        return Calc._countCalcActions;
    }

    public get operation(): string {

        return this._operation;
    }

    public set operation(val:string) {
        if (val == "mul" || val == "div" || val == "sum"||val== "sub")
            this._operation = val;
        else
            this._operation = "sum";
    }


    public exeOperatin(): number {

        /*
        ---------------------------------
        non-static function can access: 
            1)static function
            2)static properties
            3)non-static function
            4)non-static properties
        */

        switch (this._operation) {
            case "sum": return Calc.sum(1, 2);
            case "sub": return Calc.sub(1, 2);
            case "div": return Calc.div(1, 2);
            case "mul": return Calc.mul(1, 2);
        }
    }

    public static sum(n1: number, n2: number): number {

        /*
        ---------------------------------
        static function can only access: 
            1)static function
            2)static properties
        ---------------------------------
        static function can not access:
            1)non-static function
            2)non-static properties
        */

        //'operation' is non- static member
        //the current is a static function
        //console.log(this.operation);  -->error


        Calc._countCalcActions++;  //access static member via class name
        return n1 + n2;
    }

    public static sub(n1: number, n2: number): number {
        
        Calc._countCalcActions++;  //access static member via class name
        return n1 - n2;
    }


    public static mul(n1: number, n2: number): number {

        Calc._countCalcActions++;  //access static member via class name
        return n1 *n2;
    }


    public static div(n1: number, n2: number): number {

        Calc._countCalcActions++;  //access static member via class name
        return n1 / n2;
    }


}