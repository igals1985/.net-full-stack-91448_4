let num: number = 3;

let result1: string = "";
let result2: string = func(num);

switch (num) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: result1 = "working day in our word office"; break;
    case 6:
    case 7: result1 = "weekend"; break;
}

document.write("result1: " + result1 + "<br/>");
document.write("result2: " + result2 + "<br/>");

function func(param: number): string {
    switch (param) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: return "working day in our word office";
        case 6:
        case 7: return "weekend";
    }
}