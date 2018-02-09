var btnElement = ' <button onclick="nextTurn()">click me</button>';
var mat = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
function nextTurn() {
    alert("hello");
    prompt("pls enter input:");
    var tempStr = "<br/>";
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            tempStr += "&nbsp;" + mat[i][j] + "&nbsp;|";
        }
        tempStr += "<br/>----------<br/>";
    }
    document.write(tempStr + btnElement);
}
//# sourceMappingURL=app.js.map