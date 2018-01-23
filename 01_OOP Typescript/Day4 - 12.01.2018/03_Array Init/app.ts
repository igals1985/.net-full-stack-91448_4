//a way to add elements with new Array() ctor
let numArr: Array<number> = new Array<number>(
    subNum(3, 4),
    subNum(9, 2),
    subNum(5, 1)
); 


document.write(`numArr: ${numArr}`);  //--> numArr: -1,7,4



function subNum(x: number, y: number): number {
    return x - y;
}