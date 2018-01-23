var student0Name = "Json";
var student0Age = 10;
var student0IsMale = true;
document.write("<br/>-----------student0-----------------<br/>");
document.write("Name : " + student0Name + "<br/>");
document.write("Age : " + student0Age + "<br/>");
document.write("IsMale : " + student0IsMale + "<br/>");
var student1 = {
    "name": "Bob",
    "age": 21,
    "isMale": true
};
/*
way 1 to get the values of the object
*/
document.write("<br/>-----------student1 - by dot operator-----------------<br/>");
document.write("Name : " + student1.name + "<br/>");
document.write("Age : " + student1.age + "<br/>");
document.write("IsMale : " + student1.isMale + "<br/>");
/*
way 2 to get the values of the object
*/
document.write("<br/>-----------student1 - by brakects operator-----------------<br/>");
document.write("Name : " + student1["name"] + "<br/>");
document.write("Age : " + student1["age"] + "<br/>");
document.write("IsMale : " + student1["isMale"] + "<br/>");
document.write("<br/>-----------let i in student1-----------------<br/>");
for (var i in student1) {
    document.write("i:" + i + "<br/>");
    document.write("student1[i]: " + student1[i] + "<br/>");
}
var student2 = {
    "name": "Alice",
    "age": 22,
    "isMale": false
};
document.write("<br/>-----------student2-----------------<br/>");
document.write("Name : " + student2.name + "<br/>");
document.write("Age : " + student2.age + "<br/>");
document.write("IsMale : " + student2.isMale + "<br/>");
//# sourceMappingURL=app.js.map