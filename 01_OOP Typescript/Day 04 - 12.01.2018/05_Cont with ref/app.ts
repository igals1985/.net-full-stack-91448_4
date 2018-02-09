//num is primitive-------------------
const num: number = 4;


//Left- hand side of assignment expression cannot be a constant or a read- only property.
// num = 5;

//arr is ref-------------------------
const arr: Array<number> = new Array<number>();

//OK
arr[0] = 4;


//Left- hand side of assignment expression cannot be a constant or a read- only property.
//arr= new Array<number>();