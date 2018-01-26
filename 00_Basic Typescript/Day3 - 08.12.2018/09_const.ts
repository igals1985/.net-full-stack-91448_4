
const MIN_AGE: number = Number(prompt("enter min age:"));
const MAX_AGE: number = 120;

let age: number = Number(prompt("enter your age:"));

if (age >= MIN_AGE && age <= MAX_AGE) {
    alert("you can buy beer");
    document.write("you can buy beer");
}
else {
    alert("you can buy only soft drink");
    document.write("you can buy only soft drink");
}

