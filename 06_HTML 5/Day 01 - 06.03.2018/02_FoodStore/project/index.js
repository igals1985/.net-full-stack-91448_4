
//a way to add to the <body> a function that will be executed when the  "onload" event is raised
clearOrder = () => {
    localStorage.clear();
};


displayOrder = () => {
    let pizzaCnt = localStorage.getItem("pizza");
    let chipsCnt = localStorage.getItem("chips");
    let saladCnt = localStorage.getItem("salad");

    document.getElementById("pizzaCnt").innerHTML = ((pizzaCnt) ? pizzaCnt : 0) + " items in cart";
    document.getElementById("chipsCnt").innerHTML = ((chipsCnt) ? chipsCnt : 0) + " items in cart";;
    document.getElementById("saladCnt").innerHTML = ((saladCnt) ? saladCnt : 0) + " items in cart";;
}

function addItem(foodType) {
    let foodCounter = localStorage.getItem(foodType);

    foodCounter = (foodCounter) ? foodCounter : 0;

    localStorage.setItem(foodType, ++foodCounter);
}



