//-------------------------------Food type variabeles--------------------
var obj1 = new Food();
var obj2 = new Pizza();
var obj3 = new Chips();
//Property 'numOfToppings' does not exist on type 'Food'
//obj2.numOfToppings = 6;  //-->compilation error
if (obj1 instanceof Pizza) {
    //obj1לאיזור הזה הקוד יגיע רק במקרה ש
    //Pizza הוא באמת מסוג
    console.log("obj1 instanceof Pizza");
    obj1.numOfToppings = 6;
}
if (obj2 instanceof Pizza) {
    console.log("obj2 instanceof Pizza");
    obj2.numOfToppings = 6;
}
/*
buyInfo() is in: Food
Pizza overrides this function
Chips overrides this function
Food לכן בשעת קומיפלציה אפשר להגדיר שמצביע מטיפוס
יבצע את הפונקציה הנ"ל
בפועל - בשעת ריצה הפונקציה תממומש ע"י המחלקה ממנה נוצר האובייקט
*/
obj1.buyInfo(); //Food קיבלנו ביצוע של הפונקציה מסוג 
obj2.buyInfo(); //Pizza קיבלנו ביצוע של הפונקציה מסוג 
obj3.buyInfo(); //Chips קיבלנו ביצוע של הפונקציה מסוג 
//-------------------------------Pizza type variabeles--------------------
//Type 'Food' is not assignable to type 'Pizza'.
//let obj4: Pizza = new Food();  //-->compilation error
var obj5 = new Pizza();
obj5.numOfToppings = 6;
//-------------------------------Chips type variabeles--------------------
// Type 'Chips' is not assignable to type 'Pizza'
//let obj6: Pizza = new Chips();  //-->compilation error
//Type 'Food' is not assignable to type 'Chips'.
//let obj7: Chips = new Food();  //-->compilation error
//ype 'Pizza' is not assignable to type 'Chips'
//let obj8: Chips = new Pizza();  //-->compilation error
var obj9 = new Chips();
//# sourceMappingURL=app.js.map