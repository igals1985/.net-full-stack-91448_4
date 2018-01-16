
/*
the way to get an int random num in a specific range:
Math.round((Math.random()*(max-min))+min)
*/

let colorArr: string[] = ["Red","Green","Blue","Black","Yellow"];
let min: number = 0;
let max: number = colorArr.length;

for (let i: number = 0; i < 10; i++) {
    let randNum: number = Math.round((Math.random() * (max - min)) + min);
    let randColor: string = colorArr[randNum];
    document.write(`randColor: ${randColor}<br/>`);
}



