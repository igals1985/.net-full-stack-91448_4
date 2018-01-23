// מקבל כל סוג משתנה ומציג אותו בפופאפ alert
// \n יורד שורה באמצעות alert
alert("2+3");   //output:2+3
alert(2 + 3);  //output:5
alert(`${2 + 3}`);  //output:5




// מקבל רק מחרוזת ומציג אותו בדף עצמו document.write
// <br/> יורד שורה באמצעות document.write
document.write("2+3");   //output:2+3
document.write("\nhello");   //output: לא מוצג ולא יורד שורה
document.write("<br/>");   //output: יורד שורה 
/* ERROR
לא יכול לקבל מספר- אלא רק מחרוזת document.write

document.write(2 + 3);  
*/

document.write(`${2 + 3}`);  //output:5
