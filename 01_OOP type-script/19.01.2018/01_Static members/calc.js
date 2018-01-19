var Calc = (function () {
    function Calc(operation) {
        this.operation = operation; //access non-static member via "this" (the current oblect)
        Calc.countCalc++; //access static member via class name
    }
    Object.defineProperty(Calc, "countCalcActions", {
        //******************read-only property***********************
        //a private member that has only a get (does not have a set)
        //can be modified only inside the class , but not outside the class
        get: function () {
            return Calc._countCalcActions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Calc.prototype, "operation", {
        get: function () {
            return this._operation;
        },
        set: function (val) {
            if (val == "mul" || val == "div" || val == "sum" || val == "sub")
                this._operation = val;
            else
                this._operation = "sum";
        },
        enumerable: true,
        configurable: true
    });
    Calc.prototype.exeOperatin = function () {
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
    };
    Calc.sum = function (n1, n2) {
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
        Calc._countCalcActions++; //access static member via class name
        return n1 + n2;
    };
    Calc.sub = function (n1, n2) {
        Calc._countCalcActions++; //access static member via class name
        return n1 - n2;
    };
    Calc.mul = function (n1, n2) {
        Calc._countCalcActions++; //access static member via class name
        return n1 * n2;
    };
    Calc.div = function (n1, n2) {
        Calc._countCalcActions++; //access static member via class name
        return n1 / n2;
    };
    Calc._countCalcActions = 0;
    Calc.countCalc = 0;
    Calc.PI = 3.14; //static readonly can be assigned only in this row
    return Calc;
}());
//# sourceMappingURL=calc.js.map