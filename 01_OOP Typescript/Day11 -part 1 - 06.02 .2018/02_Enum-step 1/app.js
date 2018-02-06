var ColorEnum;
(function (ColorEnum) {
    ColorEnum[ColorEnum["green"] = 0] = "green";
    ColorEnum[ColorEnum["red"] = 1] = "red";
    ColorEnum[ColorEnum["yellow"] = 2] = "yellow";
    ColorEnum[ColorEnum["blue"] = 3] = "blue";
})(ColorEnum || (ColorEnum = {}));
var c1 = ColorEnum.yellow;
document.write("ColorEnum[0]: " + ColorEnum[0] + "<br/>");
document.write("ColorEnum[1]: " + ColorEnum[1] + "<br/>");
document.write("ColorEnum[2]: " + ColorEnum[2] + "<br/>");
document.write("ColorEnum[3]: " + ColorEnum[3] + "<br/>");
document.write("ColorEnum[4]: " + ColorEnum[4] + "<br/>");
for (var a in ColorEnum) {
    document.write(a + "<br/>");
}
/*
פלט
-------------------------
0
1
2
3
green
red
yellow
blue
--------------------------
*/
document.write("---------------------for loop-----------------------<br/>");
for (var i = 0; ColorEnum[i] != undefined; i++) {
    document.write(ColorEnum[i] + "<br/>");
}
/*
פלט
-------------------------

---------------------for loop-----------------------
green
red
yellow
blue
*/ 
//# sourceMappingURL=app.js.map