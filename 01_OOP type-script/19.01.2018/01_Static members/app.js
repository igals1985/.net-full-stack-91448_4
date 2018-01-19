document.write("Calc.PI: " + Calc.PI + " <br/>");
document.write("before clac actions: Calc.countCalcActions: " + Calc.countCalcActions + " <br/>");
document.write("Calc.sub(3,4): " + Calc.sub(3, 4) + " <br/>");
document.write("Calc.sum(3,4): " + Calc.sum(3, 4) + " <br/>");
document.write("Calc.div(3,4): " + Calc.div(3, 4) + " <br/>");
document.write("Calc.mul(3,4): " + Calc.mul(3, 4) + " <br/>");
document.write("after clac actions: Calc.countCalcActions: " + Calc.countCalcActions + " <br/>");
//Left - hand side of assignment expression cannot be a constant or a read- only property.
//Calc.countCalcActions = 9;  --> ERROR (red only property)
var calc1 = new Calc("sum");
document.write("calc1.exeOperatin() - " + calc1.operation + ": " + calc1.exeOperatin() + " <br/>");
calc1.operation = "div";
document.write("calc1.exeOperatin() - " + calc1.operation + ": " + calc1.exeOperatin() + " <br/>");
calc1.operation = "Igal"; //because the validation we will set "operation" to "sum"
document.write("calc1.exeOperatin() - " + calc1.operation + ": " + calc1.exeOperatin() + " <br/>");
document.write("after clac actions: calc1.exeOperatin() : " + Calc.countCalcActions + " <br/>");
//# sourceMappingURL=app.js.map