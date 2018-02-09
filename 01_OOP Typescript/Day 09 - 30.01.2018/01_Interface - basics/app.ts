//interface נגדיר ממשק בעזרת המילה השמורה 
//I-השם של ממשק תמיד מתחיל ב

/*
implements כאשר נחלקה ממשת ממשק נשתמש במילה השמורה
extends כאשר נחלקה יורשת מחלקה נשתמש במילה השמורה
*/

interface IActionStop {

    //הגדרת משתנה ללא יכולת להשים לו ערך
    didStopAction: boolean;
    
    //הגדרת כותרת הפונקציה ללא מימוש גוף הפונקציה
    stopAction(str: string): boolean;

}


interface IActionStart {

    //הגדרת משתנה ללא יכולת להשים לו ערך
    didStartAction: boolean;


    //הגדרת כותרת הפונקציה ללא מימוש גוף הפונקציה
    startAction(str: string): boolean;
}


class A implements IActionStart{

    //מימוש משתנה של הממשק
    public didStartAction: boolean=true;


    //מימוש של הפונקציה המוגדרת בממשק
    public startAction(str: string): boolean {
        document.write(str + "<br/>");
        return true;
    }

}


//A המחלקה הזו אוטומטית תכיל כל מה שיש במחלקה 
//IActionStart ולכן יוצא שהיא גם ממשמת את 
class B extends A implements IActionStop {
    //מימוש משתנה של הממשק
    public didStopAction: boolean = true;


    //מימוש של הפונקציה המוגדרת בממשק
    public stopAction(str: string): boolean {
        document.write(str + "<br/>");
        return true;
    }
}
    
   





let objA = new A();


//-------------------------------------------------------------
//instanceof is for class not for interface!!!
//Cannot find name 'IActionStart'

//if (objA instanceof IActionStart) {}   ---> compilation error!!!!
//-------------------------------------------------------------


//-------------------------casting to interface (first way)------------------------------------
(<IActionStart>objA).didStartAction;
(<IActionStart>objA).startAction("Test");
//---------------------------------------------------------------------------------------------


//-------------------------casting to interface (second way)------------------------------------
(objA as IActionStart).didStartAction;
(objA as IActionStart).startAction("Test");
//----------------------------------------------------------------------------------------------