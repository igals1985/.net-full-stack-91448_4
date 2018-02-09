/*
-----------------------
יש שלוש סוגי שגיאות:
-----------------------
        קומפילציה
        זמן ריצה
        לוגיקה
-----------------------

סוג השגיאה שנטפל בקוד הבא יהיה רק שגיאת זמן ריצה!!!
*/
function test2(num) {
    try {
        // 
        /**
        * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
        * @param precision Number of significant digits. Must be  1 - 100, inclusive.
        */
        //קטע קוד שעלול לקרוס
        document.write("START TRY--------------------------<br>");
        document.write("num: " + num.toString() + "<br>");
        document.write("END TRY----------------------------<br>");
    }
    catch (err) {
        // אם היתה חריגה, נגיע מיידית לבלוק זה
        document.write("Error Name (object type): " + err.name + "<br>");
        document.write("Error Message: " + err.message + "<br>");
        if (err instanceof TypeError) {
            document.write("Please do not sent undefined<br>");
        }
    }
    finally {
        // קטע קוד שתמיד יתבצע - גם אם היתה חריגה וגם אם לא היתה חריגה
        document.write("This code will always run!<br>");
    }
}
function test1(precision) {
    try {
        // 
        /**
        * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
        * @param precision Number of significant digits. Must be  1 - 100, inclusive.
        */
        //קטע קוד שעלול לקרוס
        var finalPI = Math.PI.toPrecision(precision);
        document.write("PI: " + finalPI + "<br>");
    }
    catch (err) {
        // אם היתה חריגה, נגיע מיידית לבלוק זה
        document.write("Error Name (object type): " + err.name + "<br>");
        document.write("Error Message: " + err.message + "<br>");
        if (err instanceof RangeError) {
            document.write("Please enter only 1 to 100!<br>");
        }
    }
    finally {
        // קטע קוד שתמיד יתבצע - גם אם היתה חריגה וגם אם לא היתה חריגה
        document.write("This code will always run!<br>");
    }
}
test1(3);
test1(101);
test1(-24); //שגיאת זמן ריצה
test2(1);
test2(undefined);
//# sourceMappingURL=app.js.map