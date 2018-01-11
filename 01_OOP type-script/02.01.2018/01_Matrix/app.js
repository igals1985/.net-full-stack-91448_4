var x = 10; //הגדרת מספר השורות שיהיה במערך הדו מימדי
//הגדרת מערך דו- מימדי ואיתחולו כמצביע למערך מצביעים באורך 4 תאים
//every element in the mat contains the "undefined" value
//every element in the mat can contain a pointer to a Array<string>
var mat = new Array(x);
for (var row = 0; row < x; row++) {
    //הגדרת מערך חד מימדי באורך 4 תאים , בו כל תא יכול להכיל מחרוזת
    //mat התא הנוכחי במערך המצביעים עליו מצביע
    // יצביע כעת על המערך החד מימדי
    //every element in the mat[row] contains the "undefined" value
    //every element in the mat[row] can contain a string
    mat[row] = new Array(x);
    for (var col = 0; col < x; col++) {
        if (col == row && ((col + row) == (x - 1))) {
            mat[row][col] = "Center";
        }
        else if (col == row) {
            mat[row][col] = "Main";
        }
        else if ((col + row) == (x - 1)) {
            mat[row][col] = "Sub";
        }
        else if (row < col) {
            mat[row][col] = "Up";
        }
        else {
            mat[row][col] = "Down";
        }
    }
}
document.write("mat: " + mat + "<br/><br/><br/>");
for (var row = 0; row < x; row++) {
    //הדפסת מערך חד מימדי תגרום להדפסת כל האיברים עם פסיקים בין תא לתא
    document.write(mat[row] + "<br/>");
}
for (var row = 0; row < x; row++) {
    for (var col = 0; col < x; col++) {
        document.write("mat[" + row + "][" + col + "]: " + mat[row][col] + "<br/>");
    }
}
//# sourceMappingURL=app.js.map