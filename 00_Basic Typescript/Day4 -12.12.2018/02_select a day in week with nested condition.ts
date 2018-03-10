let day: number = Number(prompt("enter a day:"));

if (day > 7 || day < 1 || isNaN(day)) {
    alert("non-valid day");
}
else if (day == 1) {
    alert("Sunday");
}
else if (day == 2) {
    alert("Monday");
}
else if (day == 3) {
    alert("Tuesday");
}
else if (day == 4) {
    alert("Wednesday");
}
else if (day == 5) {
    alert("Thursday");
}
else if (day == 6) {
    alert("Friday");
}
else {
    alert("Saturday");
}









