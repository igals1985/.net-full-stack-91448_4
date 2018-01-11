//example to a simple array:
let numArray: number[] = [1, 2, 3];


//example to a json array:
let chairArray: any[] = [
    {
        "chairColor": "red",
        "price": 100,
        "isSold": true
    },
    {
        "color": "blue",
        "price": 100
    },
    {
        "color": "yellow",
        "price": 70,
        "isSold": false
    }
];



for (let i = 0; i < chairArray.length; i++) {
    document.write(`--------------chair${i}-------------<br/>`);


    let tempObj = chairArray[i];
    for (let x in tempObj) {
        document.write(`${x}: `);
        document.write(`${tempObj[x]}<br/>`);
    }


    for (let x in chairArray[i]) {

        //chairArray[i] - is a single object
        //(chairArray[i])[x]  --> get the value from the single object, for the key "x"
        document.write(`${x}: `);
        document.write(`${chairArray[i][x]}<br/>`);
    }


}

