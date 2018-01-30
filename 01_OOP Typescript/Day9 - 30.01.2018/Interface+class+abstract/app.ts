

let b1: Bimba = new Bimba();  //Student implements IMove( IMove extends IMoveLeft,IMoveRight)
checkLeftMovement(b1);
checkMovement(b1);

let s1: Student = new Student();  //Student implements IMoveLeft,IMoveRight
checkLeftMovement(s1);

//Argument of type 'Student' is not assignable to parameter of type 'IMove'
//checkMovement(s1);  --> שגיאת קומפילציה


//IMoveLeft במערך הזה נוכל להציב לתאים רק אובייקטים ממחלקות שמממשות את הממשק 
let arr: IMoveLeft[] = [new Student(), new Student(), new Student(), new Bimba()];



document.write("--------------------IMoveLeft[] array loop----------------------<br/>");
for (let i: number = 0; i < arr.length; i++) {
    arr[i].moveLeftAction(i);


    if (arr[i] instanceof Student) {
        document.write((arr[i] as Student).fullName + "<br/>");
    }

    else if (arr[i] instanceof Bimba) {
        document.write((arr[i] as Bimba).vehichleName + "<br/>");
    }
}



//לפונקציה זו נוכל לקבל רק אובייקטים
//IMoveLeftשנוצרו ממחלקה שבצעה מימוש ל
function checkLeftMovement(param: IMoveLeft): void {
    param.moveLeftAction(130);
}


//לפונקציה זו נוכל לקבל רק אובייקטים
//IMoveשנוצרו ממחלקה שבצעה מימוש ל
function checkMovement(param: IMove): void {
    param.moveLeftAction(100);
    param.moveRightAction(100);
    param.moveBackAction(100);
}