function insertCalcElements() {
    var element = document.getElementById("calcFrame");
    if (element) {
        var str = `<p id="innerInput"></p>`;

        for (var outer = 6; outer >=0; outer -= 3) {
            for (var inner = 1; inner <= 3; inner++) {
                str += createButtonForCalc(outer + inner);
            }
            switch (outer) {
                case 0: str += createButtonForCalc("'*'"); break;
                case 3: str += createButtonForCalc("'='"); break;
                case 6: str += createButtonForCalc("'CE'"); break;
            }
            str += `<br/>`;
        }


        str += createButtonForCalc("0");
        str += createButtonForCalc("'+'");
        str += createButtonForCalc("'-'");
        str += createButtonForCalc("'/'");

        element.innerHTML = str;
    }
}

var currentAction = "";
function createButtonForCalc(val) {
    return `<button class="btn-ok" onclick="updateScreen(${val})">${replaceStringVal(val)}</button>`;
}


function replaceStringVal(val) {
    while ((val.toString().indexOf("'")) != -1) {
        val=val.toString().replace("'", "");
    }
    return val;
}

function updateScreen(val) {
    var element = document.getElementById("innerInput");
    if (element) {

        switch (val) {
            case 'CE': {
                element.innerText = "";
                DisabledButtons(false);
                break;
            }
            case '=': {
                element.innerText +=val + calcResult(element.innerText);
                break;
            }

            case '*': 
            case '/': 
            case '+': 
            case '-': currentAction = val;
       
            default:  element.innerText += val;
           
           
        }
    }
}


function calcResult(str){
    var arr = str.split(currentAction);
    var firstNum = parseInt(arr[0]);
    var secondNum = parseInt(arr[1]);

    DisabledButtons(true);


    switch (currentAction) {
        case "*": return firstNum * secondNum;
        case "/": return firstNum / secondNum;
        case "+": return firstNum + secondNum;
        case "-": return firstNum - secondNum;
    }

}

function DisabledButtons(val) {

    var buttonsArray = document.getElementsByTagName("button");
    for (let i of buttonsArray) {
        console.log(i.innerText);
        if (i.innerText != "CE") {
            if (val) {
                console.log(i.getAttribute("disabled"));
                i.setAttribute("disabled", "disabled");
            }
            else {
                i.removeAttribute("disabled");
            }
        }

        else {
            if (val) {
                i.setAttribute("class", "btn-ok btnCe");
            }
            else {
                i.setAttribute("class", "btn-ok");
            }
        }
    }

}