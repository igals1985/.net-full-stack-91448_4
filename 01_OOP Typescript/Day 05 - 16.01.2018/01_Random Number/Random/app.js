/** Math.random() -Returns a pseudorandom number between 0 and 1. */
var randNum = Math.random();
for (var i = 1; i < 10; randNum = Math.random(), i++) {
    document.write(randNum + "<br/>");
}
/*
the way to get a random num in a specific range:
(Math.random()*(max-min))+min
*/
//max : 10 / min : 0
//max-min = 10
var min1 = 0;
var max1 = 10;
var rand1 = (Math.random() * (max1 - min1)) + min1;
document.write("rand1: " + rand1 + "<br/>");
//max : 10 / min : 5
//max-min = 5
var min2 = 5;
var max2 = 10;
var rand2 = (Math.random() * (max2 - min2)) + min2;
document.write("rand2: " + rand2 + "<br/>");
/*
the way to get an int random num in a specific range:
Math.round((Math.random()*(max-min))+min)
*/
var min3 = 7;
var max3 = 12;
var rand3 = Math.round((Math.random() * (max3 - min3)) + min3);
document.write("rand3: " + rand3 + "<br/>");
//# sourceMappingURL=app.js.map