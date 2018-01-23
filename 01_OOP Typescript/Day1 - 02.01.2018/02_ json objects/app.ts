let student0Name: string = "Json";
let student0Age: number = 10;
let student0IsMale: boolean = true;

document.write(`<br/>-----------student0-----------------<br/>`);
document.write(`Name : ${student0Name}<br/>`);
document.write(`Age : ${student0Age}<br/>`);
document.write(`IsMale : ${student0IsMale}<br/>`);



let student1: any = {
    "name": "Bob",
    "age": 21,
    "isMale":true
};

/*
way 1 to get the values of the object (. operator)
*/
document.write(`<br/>-----------student1 - by dot operator-----------------<br/>`);
document.write(`Name : ${student1.name}<br/>`);
document.write(`Age : ${student1.age}<br/>`);
document.write(`IsMale : ${student1.isMale}<br/>`);

/*
way 2 to get the values of the object ([] operator)
*/
document.write(`<br/>-----------student1 - by brakects operator-----------------<br/>`);
document.write(`Name : ${student1["name"]}<br/>`);
document.write(`Age : ${student1["age"]}<br/>`);
document.write(`IsMale : ${student1["isMale"]}<br/>`);

/*
way 3 to get the values of the object (for-in loop)
*/
document.write(`<br/>-----------let i in student1-----------------<br/>`);
for (let i in student1) {
    document.write(`i:${i}<br/>`);
    document.write(`student1[i]: ${student1[i]}<br/>`);
}


let student2: any = {
    "name": "Alice",
    "age": 22,
    "isMale": false
};

document.write(`<br/>-----------student2-----------------<br/>`);
document.write(`Name : ${student2.name}<br/>`);
document.write(`Age : ${student2.age}<br/>`);
document.write(`IsMale : ${student2.isMale}<br/>`);

