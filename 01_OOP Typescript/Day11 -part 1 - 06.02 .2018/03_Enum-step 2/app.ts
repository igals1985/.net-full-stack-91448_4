//enumאם הצבנו ערך מספרי לערך מחרוזתי ב
//זה יהיה הערך שייצג אותו
//וכל הערכים הבאים אחריו, שלא ממוספרים יקבלו ערך מספרי גדול ב1 מהערך הקודם


enum ColorEnum {
    "green"=4,
    "red",   //יהיה אוטומטית 5
    "yellow"=7,
    "blue",  //יהיה אוטומטית 8
    "black" = 4,
    "pink" = 4
}


document.write("ColorEnum[4]: " + ColorEnum[4] + "<br/>");   //pink <- בגלל שיצרנו כמה ערכים מחרוזתיים עם ייצוג 4, נקבל את הערך המחרוזתי האחרון שמוספר עם 4
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



