let btnElement:string = ' <button onclick="nextTurn()">click me</button>';
let mat: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

function nextTurn(): void {
    alert("hello");
    prompt("pls enter input:");
    let tempStr: string = "<br/>";
    for (let i: number = 0; i < mat.length; i++) {
        for (let j: number = 0; j < mat[i].length; j++) {
            tempStr += "&nbsp;" + mat[i][j] + "&nbsp;|";
        }
        tempStr += "<br/>----------<br/>";
    }
    document.write(tempStr+btnElement);
}
