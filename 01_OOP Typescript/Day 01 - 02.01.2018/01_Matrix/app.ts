let x: number = 10;  //הגדרת מספר השורות שיהיה במערך הדו מימדי

//הגדרת מערך דו- מימדי ואיתחולו כמצביע למערך מצביעים באורך 4 תאים
//every element in the mat contains the "undefined" value
//every element in the mat can contain a pointer to an Array<string>
let mat: Array<Array<string>> = new Array<Array<string>>(x);

for (let row: number = 0; row < x; row++) {

    //mat[row] contain a pointer to an Array<string> with 4 elements
    //every element in the mat[row] contains the "undefined" value
    //every element in the mat[row] can contain a string
    mat[row] = new Array<string>(x);

    for (let col: number = 0; col < x; col++) {

        if (col == row && ((col + row) == (x - 1))) {
            mat[row][col] = "Center";
        }
        else if (col == row) {
            mat[row][col] = "Main";
        }
        else if ((col + row) == (x-1)) {
            mat[row][col] = "Sub";
        }
        else if(row<col){
            mat[row][col] = "Up";
        }
        else {
            mat[row][col] = "Down";
        }
    }
}



document.write(`mat: ${mat}<br/><br/><br/>`);

for (let row: number = 0; row < x; row++) {

    //הדפסת מערך חד מימדי תגרום להדפסת כל האיברים עם פסיקים בין תא לתא
    document.write(`${mat[row]}<br/>`);
}


for (let row: number = 0; row < x; row++) {
    for (let col: number = 0; col < x; col++) {
        document.write(`mat[${row}][${col}]: ${mat[row][col]}<br/>`)
    }
   
}


