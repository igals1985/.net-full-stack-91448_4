/*
the way to get an int random num in a specific range:
Math.round((Math.random()*(max-min))+min)
*/
var colorArr = ["Red", "Green", "Blue", "Black", "Yellow"];
var min = 0;
var max = colorArr.length;
for (var i = 0; i < 10; i++) {
    var randNum = Math.round((Math.random() * (max - min)) + min);
    var randColor = colorArr[randNum];
    document.write("randColor: " + randColor + "<br/>");
}
//# sourceMappingURL=app.js.map