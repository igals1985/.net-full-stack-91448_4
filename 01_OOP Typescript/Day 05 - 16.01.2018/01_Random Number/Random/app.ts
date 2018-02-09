
 /** Math.random() -Returns a pseudorandom number between 0 and 1. */
let randNum: number = Math.random();

for (let i: number = 1; i < 10; randNum = Math.random(), i++) {
    document.write(`${randNum}<br/>`);
}



/*
the way to get a random num in a specific range:
(Math.random()*(max-min))+min
*/

//max : 10 / min : 0
//max-min = 10
let min1: number = 0;
let max1: number = 10;
let rand1: number = (Math.random() * (max1 - min1)) + min1;
document.write(`rand1: ${rand1}<br/>`);


//max : 10 / min : 5
//max-min = 5
let min2: number= 5;
let max2: number = 10;
let rand2: number = (Math.random() * (max2 - min2)) + min2;
document.write(`rand2: ${rand2}<br/>`);


/*
the way to get an int random num in a specific range:
Math.round((Math.random()*(max-min))+min)
*/
let min3: number = 7;
let max3: number = 12;
let rand3: number = Math.round((Math.random() * (max3 - min3)) + min3);
document.write(`rand3: ${rand3}<br/>`);


