enum ColorEnum {
    "green",
    "red",
    "yellow",
    "blue"
}


let c1: ColorEnum = ColorEnum.yellow;


document.write("ColorEnum[0]: "+ColorEnum[0] + "<br/>");
document.write("ColorEnum[1]: " +ColorEnum[1] + "<br/>");
document.write("ColorEnum[2]: " +ColorEnum[2] + "<br/>");
document.write("ColorEnum[3]: " +ColorEnum[3] + "<br/>");
document.write("ColorEnum[4]: " + ColorEnum[4] + "<br/>");

for (let a in ColorEnum) {
    document.write(a+"<br/>");
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
for (let i: number = 0; ColorEnum[i] != undefined;i++) {
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