
let person1Name: string = "Yaniv";
let person1Age: number = 22;
let person1Weight: number = 60;

let person2Name: string = "Tzhahi";
let person2Age: number = 24;
let person2Weight: number = 55;

if (person1Age > person2Age) {
    document.write(person1Age + "<br/>");
}
else {
    document.write(person2Age + "<br/>");
}


if (person1Weight > person2Weight) {
    document.write(person1Weight + "<br/>");
}
else {
    document.write(person2Weight + "<br/>");
}

for (let i: number = 1; i <= 5; i++) {
    let num: number = Number(prompt("enter a num"));

    if (num > i) {
        document.write(num + "<br/>");
    }
    else {
        document.write(i + "<br/>");
    }
}

