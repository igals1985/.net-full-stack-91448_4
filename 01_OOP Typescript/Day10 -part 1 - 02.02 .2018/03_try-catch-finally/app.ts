/*
-----------------------
יש שלושה סוגי שגיאות:
-----------------------
        קומפילציה
        זמן ריצה
        לוגיקה
-----------------------

סוג השגיאה שנטפל בקוד הבא יהיה רק שגיאת זמן ריצה!!!
*/



function test2(num: number):string {
    try {

        //קטע קוד שעלול לקרוס
        document.write("Before try - return!-----------------------<br>");
       return "num: " + num.toString() + "<br>";
      
        // catch-ואם לא היתה חריגה לא נכנס ל, נגיע לסוף הבלוק

    }
    catch (err) {
        // אם היתה חריגה, נגיע מיידית לבלוק זה
        document.write("Error Name (object type): " + err.name + "<br>");
        document.write("Error Message: " + err.message + "<br>");

        if (err instanceof TypeError) {
            document.write("Please do not sent undefined<br>");
        }
        document.write("Before cach - return!-----------------------<br>");
        return err.name;
    }
    finally {
        // קטע קוד שתמיד יתבצע - גם אם היתה חריגה וגם אם לא היתה חריגה
        document.write("---------------finally-----------------------<br>");
    }


}


document.write("test2(1): " + test2(1) + "<br>");
document.write("test2(undefined): " + test2(undefined) + "<br>");

