//enumאם הצבנו ערך מספרי לערך מחרוזתי ב
//זה יהיה הערך שייצג אותו
//וכל הערכים הבאים אחריו, שלא ממוספרים יקבלו ערך מספרי גדול ב1 מהערך הקודם
var ColorEnum;
(function (ColorEnum) {
    ColorEnum[ColorEnum["green"] = 4] = "green";
    ColorEnum[ColorEnum["red"] = 5] = "red";
    ColorEnum[ColorEnum["yellow"] = 7] = "yellow";
    ColorEnum[ColorEnum["blue"] = 8] = "blue";
    ColorEnum[ColorEnum["black"] = 4] = "black";
    ColorEnum[ColorEnum["pink"] = 4] = "pink";
})(ColorEnum || (ColorEnum = {}));
document.write("ColorEnum[4]: " + ColorEnum[4] + "<br/>"); //pink <- בגלל שיצרנו כמה ערכים מחרוזתיים עם ייצוג 4, נקבל את הערך המחרוזתי האחרון שמוספר עם 4
document.write("ColorEnum[5]: " + ColorEnum[5] + "<br/>");
document.write("ColorEnum[7]: " + ColorEnum[7] + "<br/>");
document.write("ColorEnum[8]: " + ColorEnum[8] + "<br/>");
document.write("ColorEnum[4]: " + ColorEnum[4] + "<br/>");
/*
פלט
---------------

ColorEnum[4]: pink
ColorEnum[5]: red
ColorEnum[7]: yellow
ColorEnum[8]: blue
ColorEnum[4]: pink
*/
//# sourceMappingURL=app.js.map