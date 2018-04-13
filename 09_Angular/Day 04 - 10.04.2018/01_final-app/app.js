//שימוש בספריה שהורדנו על ידי הפקודה
//npm install express
const express= require ('express');


/*
 The express() function is a top-level function exported by the express module.
 בצורה זו אנו משתמשים במודול שביצענו לו ייבוא, ויוצרים בעזרתו שרת מקומי
 */
const app=express();


/*
dist יש לאפשר גישה לקבצים הנמצאים בתיקיית 
*/
app.use(express.static('./dist'));

//במצב של פרודקשיין נשתמש בפורט שהוגדר על ידי השרת עצמו
//ואילו במצב הרצה מקומית נשתמש בפורט 3500
let port=process.env.PORT||3500;

/*
יצירת שרת המאזין לבקשות לקוח, דרך פורט מסויים
כיוון שלא הגדרנו ניתובים - בצורה דיפולטיבית השרת יחזיר עבור כל בקשה את העמוד:
"\node-servise\dist\index.html"
*/
app.listen(port,()=>{console.log(`server listening on port ${port}`)});
