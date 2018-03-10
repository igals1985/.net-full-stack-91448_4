let a: number = 0;
var b: number = 0;
document.write(`a: ${a}, b: ${b}<br/>`);



func();


function func(): void {

    document.write(`a: ${a}, b: ${b}<br/>`);

    {
        //document.write(`a: ${a}, b: ${b}<br/>`);
        var b: number = 4;
        let a: number = 5;
        document.write(`a: ${a}, b: ${b}<br/>`);
    }
}

