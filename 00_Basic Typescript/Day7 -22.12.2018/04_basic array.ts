let arr: Array<string>;

arr = new Array<string>(5);


for (let i: number = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br/>");
}

arr[0] = "A";
arr[1] = "B";
arr[2] = "C";
arr[3] = "D";
arr[4] = "E";

for (let i: number = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br/>");
}


