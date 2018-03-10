
let arr1: Array<number>;
let arr2: Array<number>;
arr1 = new Array<number>(5);


for (let i: number = 0; i < arr1.length; i++) {
    arr1[i]=i;
}


document.write("arr1: " + arr1 + "<br/>");
document.write("arr2: " + arr2 + "<br/>");

arr2 = arr1;

document.write("arr1: " + arr1 + "<br/>");
document.write("arr2: " +arr2 + "<br/>");


arr2[0] = 8;

document.write("arr1: " + arr1 + "<br/>");
document.write("arr2: " + arr2 + "<br/>");




arr1[2] = 9;

document.write("arr1: " + arr1 + "<br/>");
document.write("arr2: " + arr2 + "<br/>");

