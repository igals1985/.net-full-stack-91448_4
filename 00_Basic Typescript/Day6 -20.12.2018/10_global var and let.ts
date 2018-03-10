var x3: string = "a";
let x4: string = "a";

{
    var x1: string = "a";
    let x2: string = "a";
    document.write(`${x1},${x2},${x3},${x4}<br/>`);
}


function func(): void {

    var x5: string = "a";
    let x6: string = "a";


    document.write(`${x1},${x3},${x4},${x5},${x6}<br/>`);
}


document.write(`${x1},${x3},${x4}<br/>`);

func();
