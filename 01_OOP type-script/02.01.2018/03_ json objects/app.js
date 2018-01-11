var chair1 = {
    "color": "red",
    "price": 100,
    "isSold": true
};
var chair2 = {
    "color": "blue",
    "price": 100,
    "isSold": true
};
var chair3 = {
    "color": "yellow",
    "price": 70,
    "isSold": false
};
document.write("--------------chair1-------------<br/>");
for (var i in chair1) {
    document.write(chair1[i] + "<br/>");
}
document.write("--------------chair2-------------<br/>");
for (var i in chair2) {
    document.write(chair2[i] + "<br/>");
}
document.write("--------------chair3-------------<br/>");
for (var i in chair3) {
    document.write(chair3[i] + "<br/>");
}
//# sourceMappingURL=app.js.map