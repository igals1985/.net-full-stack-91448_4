var b1 = new Bimba(); //Student implements IMove( IMove extends IMoveLeft,IMoveRight)
checkLeftMovement(b1);
checkMovement(b1);
var s1 = new Student(); //Student implements IMoveLeft,IMoveRight
checkLeftMovement(s1);
//Argument of type 'Student' is not assignable to parameter of type 'IMove'
//checkMovement(s1);  --> שגיאת קומפילציה
//IMoveLeft במערך הזה נוכל להציב לתאים רק אובייקטים ממחלקות שמממשות את הממשק 
var arr = [new Student(), new Student(), new Student(), new Bimba()];
document.write("--------------------IMoveLeft[] array loop----------------------<br/>");
for (var i = 0; i < arr.length; i++) {
    arr[i].moveLeftAction(i);
    if (arr[i] instanceof Student) {
        document.write(arr[i].fullName + "<br/>");
    }
    else if (arr[i] instanceof Bimba) {
        document.write(arr[i].vehichleName + "<br/>");
    }
}
//לפונקציה זו נוכל לקבל רק אובייקטים
//IMoveLeftשנוצרו ממחלקה שבצעה מימוש ל
function checkLeftMovement(param) {
    param.moveLeftAction(130);
}
//לפונקציה זו נוכל לקבל רק אובייקטים
//IMoveשנוצרו ממחלקה שבצעה מימוש ל
function checkMovement(param) {
    param.moveLeftAction(100);
    param.moveRightAction(100);
    param.moveBackAction(100);
}
//# sourceMappingURL=app.js.map