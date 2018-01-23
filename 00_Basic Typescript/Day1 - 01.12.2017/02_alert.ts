/* 01.12.2017
jb - class 404
tel aviv */


//the output:welcome to first lesson in TS
alert("welcome to first lesson in TS");


//the output:3+4
alert("3+4");   


//the output:7
//אין צורך בסוגריים - מכיוון שפעולת החיבור היא רק בין מספרים
alert(3 + 4);

//the output:hello world
// + נועד בשביל ליצור שרשור נשתמש ב
// שהשתמשנו בפעולת שרשור עם מחרוזת
alert("hello "+"world");

//the output:3+4= 7
// + נועד בשביל ליצור שרשור נשתמש ב
//חובה להוסיף סוגריים לפעולת החיבור של המספרים
//מכיוון שהשתמשנו בפעולת שרשור עם מחרוזת
alert("3+4= " + (3 + 4));


//the output: 3+4= 34
// + נועד בשביל ליצור שרשור נשתמש ב
alert("3+4= " + 3 + 4);


//שתי השורות הבאות מציגות אותו פלט
// ${} בשורה השניה - יש שימוש בבק טיק (`) שדרכו נוכל להוסיף ביטויים או חישובים בתוך
alert("3+4= " + (3 + 4) + " it is true!!!");
alert(`3+4= ${3 + 4} it is true!!!`);


alert(`3+4= ${3 + 4}\n3-4= ${3 - 4}\n3*4= ${3 * 4}\n3%4= ${3 % 4}\n`);

let num1: number;
let num2: number;
num1 = 3;
num2 = 4;
alert(`3==4 : ${num1 == num2}`);