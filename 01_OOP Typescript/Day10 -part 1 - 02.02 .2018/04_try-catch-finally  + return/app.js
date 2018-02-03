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
        //קטע קוד שעלול לקרוס
        document.write("Before try - return!-----------------------<br>");
        return "num: " + (num++).toString() + "<br>";
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
}
document.write("test2(1): " + test2(1) + "<br>");
document.write("test2(undefined): " + test2(undefined) + "<br>");
//# sourceMappingURL=app.js.map